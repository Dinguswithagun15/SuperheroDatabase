import React from "react";
import {retrieve} from "../../retrieve.js";
export default async function Home() {
  const response = await retrieve();
  const characters = response.Items;
  return (
    <div className="bg-slate-800 flex flex-col m-10 p-5 border-4 border-black">{characters.map((character) => <Character key={character.CHARACTER_NAME} character={character}/>)}</div>
  );
}

function Character(props) {
  return (
    <div className=" bg-slate-500 flex flex-row justify-evenly items-center m-5 p-2.5 border-4 border-black">
      <p className="w-1/5">{props.character.CHARACTER_NAME}</p>
      <p className="w-1/5">{props.character.CHARACTER_ALIGNMENT}</p>
      <p className="w-1/5">{props.character.CHARACTER_IDENTITY}</p>
      <p className="w-1/5">{props.character.CHARACTER_DESCRIPTION}</p>
      <div className="flex flex-col justify-center items-center w-1/5">
      {props.character.CHARACTER_ABILITIES.map((ability) => <p key={ability}>{ability}</p>)}
      </div>
    </div>
  )
}