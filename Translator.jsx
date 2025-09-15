import React, { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");

  const handleTranslate = async () => {
    const url = "https://google-translate113.p.rapidapi.com/api/v1/translator/text";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "YOUR_API_KEY", // replace with your key
        "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
      },
      body: JSON.stringify({
        from: "en",
        to: "hi", 
        text: text,
      }),
    };
    const res = await fetch(url, options);
    const data = await res.json();
    setTranslated(data.trans);
  };

  return (
    <div className="p-4 bg-white rounded shadow mt-6">
      <h2 className="text-lg font-bold mb-2">Text Translator</h2>
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Enter text in English"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded"
        onClick={handleTranslate}
      >
        Translate
      </button>
      {translated && (
        <p className="mt-2 text-green-700 font-semibold">Translated: {translated}</p>
      )}
    </div>
  );
}
