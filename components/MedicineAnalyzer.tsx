"use client";
import React, { useEffect, useState } from "react";
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize OpenAI instance

type MedicineAnalyzerProps = {};
type ErrorType = string | null;

const MedicineAnalyzer: React.FC<any> = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultJSON, setResultJSON] = useState({});
  const [error, setError] = useState<ErrorType>(null);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyD7U09b460pOmzMPyJQN5J326ooOqB04ew"
  );
  async function run() {
    setIsGenerating(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    try {
      const medicalPrompt =
        inputMessage +
        `Generate a JSON representation of about result. Dont include any backticks and The JSON directly {} should include the following fields: 
		  "Uses", 
		  "Dosage", 
		  "Side Effects", 
		  "Route",
		  "Disclaimer" `;

      const result = await model.generateContent(medicalPrompt);
      const response = await result.response;
      const text = response.text();
      setResultJSON(JSON.parse(text));
    } catch (error) {
      console.error(error);
      setError("Error occurred during generation");
    }

    setIsGenerating(false);
  }

  const handleMedicineClick = (event: any) => {
    const medicineName = event.target.innerHTML;
    setInputMessage(medicineName);
    run();
  };
  return (
    <div className="flex flex-col items-center justify-start w-full h-screen gap-12">
      <div className="flex flex-col items-center justify-start mt-[20vh] w-full ">
        <h2 className="my-10 text-6xl font-bold">Medicine Analyzer 💊</h2>
        <h2 className="desc">
          This tool will tell you about the usage and information of medicines.
        </h2>

        <div className="flex flex-row items-start justify-center mt-5">
          <div
            onClick={handleMedicineClick}
            className="px-5 mx-2 bg-blue-600 border-2 border-blue-600 border-solid rounded-full cursor-pointer hover"
          >
            Aspirin
          </div>
          <div
            onClick={handleMedicineClick}
            className="px-5 mx-2 bg-blue-600 border-2 border-blue-600 border-solid rounded-full cursor-pointer hover"
          >
            DOLO 65
          </div>
          <div
            onClick={handleMedicineClick}
            className="px-5 mx-2 bg-blue-600 border-2 border-blue-600 border-solid rounded-full cursor-pointer hover"
          >
            Crocin
          </div>
          <div
            onClick={handleMedicineClick}
            className="px-5 mx-2 bg-blue-600 border-2 border-blue-600 border-solid rounded-full cursor-pointer hover"
          >
            i-Pill
          </div>
        </div>
        <div className="flex flex-row justify-around mt-5">
          <div
            onClick={handleMedicineClick}
            className="px-5 mx-2 bg-blue-600 border-2 border-blue-600 border-solid rounded-full cursor-pointer hover"
          >
            Combiflame
          </div>
          <div
            onClick={handleMedicineClick}
            className="px-5 mx-2 bg-blue-600 border-2 border-blue-600 border-solid rounded-full cursor-pointer hover"
          >
            Diclofanac
          </div>
          <div className="px-2 pt-1 text-sm orange_gradient">1M+ Medicines</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start w-full">
        <input
          value={inputMessage}
          onChange={(e: any) => {
            setInputMessage(e.target.value);
          }}
          placeholder="Search for a medicine"
          type="text"
          className="w-full max-w-2xl p-5 border border-white rounded-full bg-slate-800/40"
        />
        <button
          // style={{ backgroundColor: isGenerating ? "grey" : "#eb5c0c" }}
          onClick={run}
          className="flex items-center justify-center w-full h-10 max-w-2xl my-5 text-sm text-white transition-all bg-blue-600 border border-blue-400 rounded-md hover:bg-blue-800 focus:outline-none"
          disabled={isGenerating}
        >
          <p className="text-sm">
            {/* {isGenerating ? "Generating..." : " */}
            {isGenerating ? "Generating..." : "Generate report"}
            {/* "} */}
          </p>
        </button>
      </div>
      <div>
        {error && <p>{error}</p>}
        {resultJSON && (
          <div className="max-w-2xl">
            <div className="p-5 my-5 bg-blue-600 border rounded-md">
              <h3 className="mb-1 text-lg font-semibold">Uses:</h3>
              <p>{resultJSON.Uses}</p>
            </div>

            <div className="p-5 my-5 bg-blue-600 border rounded-md">
              <h3 className="mb-1 text-lg font-semibold">Dosage:</h3>
              <p>{resultJSON.Dosage}</p>
            </div>

            <div className="p-5 my-5 bg-blue-600 border rounded-md">
              <h3 className="mb-1 text-lg font-semibold">Side Effects:</h3>
              <p>{resultJSON["Side Effects"]}</p>
            </div>

            <div className="p-5 my-5 bg-blue-600 border rounded-md">
              <h3 className="mb-1 text-lg font-semibold">Route:</h3>
              <p>{resultJSON.Route}</p>
            </div>

            <div className="p-5 my-5 bg-blue-600 border rounded-md">
              <h3 className="mb-1 text-lg font-semibold">Disclaimer:</h3>
              <p>{resultJSON.Disclaimer}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MedicineAnalyzer;
