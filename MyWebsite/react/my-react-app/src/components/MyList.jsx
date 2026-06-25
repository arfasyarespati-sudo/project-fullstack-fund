import { Button } from "./Button.jsx";
import { format, eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns'

export function MyList(){
  const habits = [
    {id: 1, name: "hi"},
    {id: 2, name: "hi again"}
  ]
  if (habits.length == 0){
    return <p className="text-center text-zinc-500 py-12">
      No Habits yet, Add one to get started!
    </p>
  }
  return (
   <div className="flex flex-col gap-3">
    {habits.map(habit => (
      <MyItem key={habit.id} habit={habit}></MyItem>
    ))}
   </div>
  )
}


function MyItem({ habit }){
  const dates = eachDayOfInterval ({
    start: startOfWeek(new Date(), {weekStartsOn: 1}), 
    end: endOfWeek(new Date(), {weekStartsOn: 1}),
  })
  return  <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
           <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <span className="font-medium">{habit.name}</span>
              <span className="text-sm text-amber-400">@ 3</span>
           </div>
           <Button> Delete</Button>
          </div>
          <div className="flex gap-1.5 ">
            {dates.map(date =>(
              <Button key={date.toISOString()}>
                <span className="font-medium">{format(date,"EEE")}</span>
                <span>{format(date, "d")}</span>
              </Button>
            ))}  
          </div>  
         </div>
}

