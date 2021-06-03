import React from "react"
import useMouseEvent from "./mouse"
const MyHookCmp: React.FC<any> = props => {
  const position = useMouseEvent("mousemove")
  const pos = useMouseEvent("mousedown")
  return <>
    <h1>自定义 Hook</h1>
    <h1>利用自定义 Hook 监听鼠标点击事件获取x、y坐标</h1>
    <hr />
    <h1>鼠标运动坐标</h1>
    <div>
      x: {position.x}, y: {position.y}
    </div>
    <hr />
    <h1>鼠标点击坐标</h1>
    <div>
      x: {pos.x}, y: {pos.y}
    </div>
  </>
}

export default MyHookCmp