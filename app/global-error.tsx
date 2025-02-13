"use client";

import "./globals.css";
import React from "react";

export default function GlobalError() {
  return (
    <html>
      <body>
        <h2>something went wrong</h2>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          refresh
        </button>
      </body>
    </html>
  );
}
