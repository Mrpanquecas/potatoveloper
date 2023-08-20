import { useEffect, useState } from "react"

const Clock = () => {
  const [date, setDate] = useState<Date | null>()

  const refreshClock = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return () => clearInterval(timerId)
  }, [])

  return <span className="leetText text-xl">{date?.toLocaleTimeString()}</span>
}

export default Clock
