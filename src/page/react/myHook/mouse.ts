import { useState, useEffect } from "react"
const useMouseEvent = (eventName: "mousemove" | "mousedown") => {
  const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener(eventName, updateMousePosition)
    return () => {
      document.removeEventListener(eventName, updateMousePosition)
    }    
  }, [eventName])
  return position
} 

export default useMouseEvent