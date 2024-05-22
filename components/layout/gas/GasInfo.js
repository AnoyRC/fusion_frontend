"use client";

import { useSelector } from "react-redux";
import Step1 from "./gasInfo/Step1";

export default function GasInfo() {
  const step = useSelector((state) => state.gas.step);
  return (
    <div className="flex flex-col items-center -mt-2 justify-center gap-3 bg-white p-8 py-5 rounded-b-xl pb-7">
      {step === 0 && <Step1 />}
    </div>
  );
}