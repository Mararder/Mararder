import React, { useEffect, useState } from "react";
import { Button } from "antd";

const PromiseComponent: React.FC<any> = (props) => {
  const [status, setStatus] = useState<boolean>(false)
  const [name, setName] = useState<string>("promise")
  const _onClick = () => {
    setName("promise - " + status)
    setStatus(!status)
  }  
  useEffect(() => {
    new Promise((resolve, reject) => {
      if (status) {
        resolve("22222")      
      } else {
        reject("错误")
      }
    }).then(v => {
      console.log(v)
    }).catch(error => {
      console.error(error)
    }).finally(() => {
      console.log("执行完毕")
    })
  }, [status])
  return <>
    {name}
    <div><Button onClick={_onClick}>click</Button></div>
  </>
}

export default PromiseComponent