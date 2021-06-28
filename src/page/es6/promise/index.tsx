import React, { useEffect, useState } from "react";

const PromiseComponent: React.FC<any> = (props) => {
  const [status] = useState<boolean>(false)  
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
  return <>promise</>
}

export default PromiseComponent