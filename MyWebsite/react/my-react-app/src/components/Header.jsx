import { Button } from "./Button.jsx";

export function Header(){
  return (
  
  <header className="flex items-center justify-between">
    <div className="flex flex-col gap-1 items-end">
      <h1 className="text-3xl font-bold">Habit Tracker</h1>
      <span className="text-zinc-400 text-sm">1 / 1 done today</span>
    </div>

    <div className="flex flex-col gap-1">
      <span className="text-zinc-400 text-sm">June 22 - July 22</span>
      <div className="flex items-center gap-3"> 
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </div>
  </header>
  )
}