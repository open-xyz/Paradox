"use client";

import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

type MedicalReportProps = {};
type ErrorType = string | null;

const answer =
  "Interpret this given ocr extracted data into laymen terms that even a child can understand just make sure to exclude name, age, location or similar data from the given data just interpret diagnosed medical report and provide summary in 100 words.And also give future implications and precautions to take and mention its seriousness";

const MedicalReport: React.FC<MedicalReportProps> = () => {
  const [image, setImage] = useState<File | null>(null);
  const [interpreted, setInterpreted] = useState(false);
  const [result, setResult] = useState<string>("");
  const [responseContent, setResponseContent] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultJSON, setResultJSON] = useState("");
  const [error, setError] = useState<ErrorType>(null);
  const apiKey = process.env.NEXT_PUBLIC_Vision;

  const genAI = new GoogleGenerativeAI(
    "AIzaSyD7U09b460pOmzMPyJQN5J326ooOqB04ew"
  );
  async function run(extractedText: any) {
    setIsGenerating(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    try {
      const medicalPrompt = answer + extractedText;
      const results = await model.generateContent(medicalPrompt);
      const response = await results.response;
      const text = response.text();
      setResultJSON(text);
      console.log(text);
    } catch (error) {
      console.error(error);
      setError("Error occurred during generation");
    }

    setIsGenerating(false);
  }

  const convertImageToText = async () => {
    try {
      setIsGenerating(true);
      const base64Image = await convertImageToBase64(image!);
      const extractedText = await analyzeImage(base64Image);
      console.log(extractedText);
      setResult(extractedText);
      const response = await run(extractedText);
      if (
        response &&
        response.data &&
        response.data.choices &&
        response.data.choices.length > 0
      ) {
        setResponseContent(response.data.choices[0]?.message?.content);
        console.log(
          "Extracted Text:",
          response.data.choices[0]?.message?.content
        );
      } else {
        console.error("Invalid response format");
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsGenerating(false);
      setInterpreted(true);
    }
  };

  const convertImageToBase64 = (image: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result!.toString().split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(image);
    });
  };

  const analyzeImage = (base64Image: string) => {
    const body = JSON.stringify({
      requests: [
        {
          image: {
            content: base64Image,
          },
          features: [
            {
              type: "TEXT_DETECTION",
              maxResults: 10,
            },
          ],
        },
      ],
    });

    return fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const extractedText =
          data.responses[0]?.textAnnotations[0]?.description;
        return extractedText || "No text found.";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSendMessage = async (text: string) => {
    // Implement the logic to send the message
    // This is a placeholder, replace it with your actual implementation
    return Promise.resolve({
      data: { choices: [{ message: { content: "Response Content" } }] },
    });
  };

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    setImage(selectedImage || null);
  };

  const handleButtonClick = () => {
    convertImageToText();
  };

  return (
    <div className="flex flex-col items-center justify-start h-[100vh] w-full mt-[30vh] text-white gap-5">
      {!interpreted && (
        <div className="z-[5] h-1/2 w-[30rem] px-[3rem] py-[2rem] bg-slate-500/10 rounded-xl">
          <div className="flex flex-col items-center w-full justify-start rounded-md h-[20rem] relative">
            <form className="w-full">
              <p className="text-[1.5rem]">Upload a file</p>
              <p className="text-[0.8rem] text-gray-300 mb-5">
                Accepted formats: png, jpg
              </p>
              <label
                htmlFor="image-upload"
                className="flex flex-col cursor-pointer items-center justify-center h-[20rem] px-10 transition-all rounded-md opacity-100 bg-slate-600/25 bg-blur-2xl hover:bg-slate-700/25"
              >
                <svg
                  className="w-5 h-5 text-white transition-all duration-75 group-hover:scale-110 group-active:scale-95"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                  <path d="M12 12v9"></path>
                  <path d="m16 16-4-4-4 4"></path>
                </svg>
                <p className="mt-2 text-sm text-center">Click to upload.</p>
                <p className="mt-2 text-sm text-center ">Max file size: 50MB</p>
                <span className="sr-only">Photo upload</span>
              </label>
              <div className="flex mt-1 rounded-md shadow-sm">
                <input
                  id="image-upload"
                  name="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleChangeImage}
                  required
                  className="hidden"
                />
              </div>
            </form>
          </div>
          <button
            onClick={handleButtonClick}
            disabled={image === null ? true : false}
            className={` w-full py-2 my-10 mt-20 rounded hover:bg-blue-600} ${
              image === null ? "bg-blue-200" : "bg-blue-500"
            }`}
          >
            {isGenerating ? "Generating Magic report..." : "Generate Report"}
          </button>
        </div>
      )}
      {interpreted && (
        <div className="z-[5] h-full w-[30rem] px-[3rem] py-[2rem] bg-slate-500/10 rounded-xl">
          <p>Interpreted report : </p>
          <div className="mt-10">{resultJSON}</div>
        </div>
      )}
    </div>
  );
};

export default MedicalReport;
