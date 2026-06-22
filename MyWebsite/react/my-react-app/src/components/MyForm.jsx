import { Button } from "./Button.jsx";

export function MyForm(){
  return (
    <form className="flex gap-2">
        <input className="flex-1 rounded-lg  bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2
        focus-visible:ring-violet-700"
        placeholder="New habit..."></input>
        
        <Button>Add Habit</Button>
    </form>
  )
}