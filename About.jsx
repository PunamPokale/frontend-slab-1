import React from "react";

export default function About() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">About Project</h1>
      <p className="mt-2">
        This project is built using React + Tailwind. It includes:
        <ul className="list-disc pl-6">
          <li>Text Translator (RapidAPI)</li>
          <li>Random String Generator (Hooks)</li>
          <li>React Router DOM for navigation</li>
        </ul>
      </p>
    </div>
  );
}
