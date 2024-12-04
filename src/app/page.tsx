import React from "react";
import {retrieve} from "../../retrieve.js";

//type characterType = {
  //CHARACTER_NAME: string
  //CHARACTER_ALIGNMENT: string
  //CHARACTER_IDENTITY: string
  //CHARACTER_DESCRIPTION: string
  //CHARACTER_ABILITIES: string[]
//}

export default async function Home() {
  const response = await retrieve();
  const characters = response.Items;
  return (
    <div className="bg-slate-800 flex flex-col m-10 p-5 border-4 border-black">{(characters as Record<string, string | string[]>[]).map((character) => <Character key={character.CHARACTER_NAME as string} character={character}/>)}</div>
  );
}

function Character({character} : {character: Record<string, string | string[]>}) {
  return (
    <div className=" bg-slate-500 flex flex-row justify-evenly items-center m-5 p-2.5 border-4 border-black">
      <p className="w-1/5">{character.CHARACTER_NAME}</p>
      <p className="w-1/5">{character.CHARACTER_ALIGNMENT}</p>
      <p className="w-1/5">{character.CHARACTER_IDENTITY}</p>
      <p className="w-1/5">{character.CHARACTER_DESCRIPTION}</p>
      <div className="flex flex-col justify-center items-center w-1/5">
      {(character.CHARACTER_ABILITIES as string[]).map((ability) => <p key={ability}>{ability}</p>)}
      </div>
    </div>
  )
}