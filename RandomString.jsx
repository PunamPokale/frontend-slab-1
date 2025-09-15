import React, { useState, useEffect, useCallback } from "react";

export default function RandomString() {
  const [randomStr, setRandomStr] = useState("");

  const generateString = useCallback(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomStr(result);
  }, []);

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="p-4 bg-white rounded shadow mt-6">
      <h2 className="text-lg font-bold mb-2">Random String Generator</h2>
      <p className="font-mono text-blue-600 mb-2">{randomStr}</p>
      <button
        onClick={generateString}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Generate New
      </button>
    </div>
  );
}
