"use client";

import { useState } from "react";

type MedicalReportProps = {};

const MedicalReport: React.FC<MedicalReportProps> = () => {
  const [Interpreted, setInterpreted] = useState(false);
  return (
    <div className="flex flex-col items-center justify-start h-full w-full mt-[30vh] text-white gap-5">
      {!Interpreted && (
        <div className="z-[5] h-full w-[30rem] px-[3rem] py-[2rem] bg-slate-500/10 rounded-xl">
          <div className="flex flex-col items-center w-full justify-start rounded-md h-[20rem] relative">
            <form className="w-full ">
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
                  // onChange={handleChangeImage}
                  id="image-upload"
                  name="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </form>
          </div>
          <button className="w-full py-2 my-10 mt-20 bg-blue-500 rounded hover:bg-blue-600">
            Generate Report
          </button>
        </div>
      )}
      {Interpreted && (
        <div className="z-[5] h-full w-[30rem] px-[3rem] py-[2rem] bg-slate-500/10 rounded-xl">
          <p>Interpreted report</p>
        </div>
      )}
    </div>
  );
};
export default MedicalReport;
