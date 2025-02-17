"use client";

import React from "react";
import { createContext, useContext } from "react";

type Theme = {
  color: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  color: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
