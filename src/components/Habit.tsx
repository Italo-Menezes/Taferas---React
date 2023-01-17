interface HabitProps {
  completed: number
}

import "./Habit.css"


export function Habit (props: HabitProps) {
  return (
    <h1 className="habit">{props.completed}</h1>
  )
}