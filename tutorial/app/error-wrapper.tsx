"use client";

import { useState } from "react";
import "./globals.css";

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "error occured",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);
  if (error) throw new Error(message);
  return (
    <>
      <button onClick={() => setError(true)} className="bg-blue-500">
        simulate error
      </button>
    </>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <div>
        <ErrorSimulator message="simulated error in root layout" />
      </div>
      {children}
    </>
  );
};
