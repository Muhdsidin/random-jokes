"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [joke, setJoke] = useState([]);
  const [type , setType] = useState("general")
  const getRandomJoke = async () => {
    try {
      const response = await fetch(
        `https://official-joke-api.appspot.com/jokes/${type}/random`
      );
      const data = await response.json();
      console.log(data);
      setJoke(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <button
          className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded"
          onClick={getRandomJoke}
        >
          Generate Joke{" "}
        </button>

        <select
          name="type"
          id="cars"
          onChange={(e)=> setType(e.target.value)}
          className="appearance-none px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        >
          <option value="general">General</option>
          <option value="programming">Programming</option>
          <option value="knock-knock">Knock Knock</option>
          <option value="dad">Dad</option>
        </select>
      </div>

     {joke.map((val)=>(
       <div className="flex flex-col items-center gap-8" key={val.id}>
       <h1 className="text-3xl font-bold">{val.setup}</h1>
       <p className="text-2xl">{val.punchline}</p>
     </div>
     ))}
    </div>
  );
}
