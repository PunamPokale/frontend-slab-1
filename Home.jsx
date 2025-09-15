import React from "react";
import Translator from "../components/Translator";
import RandomString from "../components/RandomString";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Frontend Project</h1>
      <Translator />
      <RandomString />
    </div>
  );
}
