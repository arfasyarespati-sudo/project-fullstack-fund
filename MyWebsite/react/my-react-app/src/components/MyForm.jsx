import { Button } from "./Button.jsx";
import { useState } from "react";

export function MyForm(){
const [name, setName]= useState("")

  function handleSubmit(e){
    e.preventDefault()

    console.log(name)
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
        <input 
        className="flex-1 rounded-lg  bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2
        focus-visible:ring-violet-700" 
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="New habit..."></input>
        
        <Button className="rounded-lg px-4 py-2 font-medium">Add Habit</Button>
    </form>
  )
}