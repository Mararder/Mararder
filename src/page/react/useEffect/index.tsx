import React, { useState, useEffect } from "react"
import { Button } from "antd"

const UseEffectCmp: React.FC<any> = props => {
  const [count, setCount] = useState<number>(0)
  const [msg, setMsg] = useState<string>()
  useEffect(() => {
    if (count !== 0){
      setMsg(`count更新到了：${count}`)
    }
  }, [count])
  return <>
  <h1>使用 useEffect hooks</h1>
  <p>{count}</p>
  <Button onClick={() => {
        const num = count + 1
        setCount(num)
      }}>更新</Button>
  <p>{msg}</p>
  </>
}

export default UseEffectCmp