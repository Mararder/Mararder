import React from "react"

const ArrayComponent: React.FC<any> = (props) => {
  return <>
    <h1>ES6 Array数值</h1>
    <h2>Array.of()将参数中所有值作为元素形成数组, 参数只能是数字</h2>
    <h3>测试实例</h3>
    <ul>
      <li>
        <p>Array.of(1,2,3,4)</p>
        <p>{JSON.stringify(Array.of(1,2,3,4))}</p>
      </li>
    </ul>
    <h2>Array.from()转化可迭代对象</h2>
    <h3>测试实例</h3>
    <ul>
      <li>
        <p>Array.from("abc")</p>
        <p>{JSON.stringify(Array.from("abc"))}</p>
      </li>
    </ul>
    <h2>Array.flat()多维数组转一维数组</h2>
    <ul>
      <li>
        <p>[1,2,[1,2,[1,2]]].flat()</p>
        <p>{JSON.stringify([1,2,[1,2,[1,2]]].flat())}</p>
      </li>
      <li>
        <p>[1,2,[1,2,[1,2]]].flat(2) 指定转化的嵌套层数</p>
        <p>{JSON.stringify([1,2,[1,2,[1,2]]].flat(2))}</p>
      </li>
      <li>
        <p>[1,2,[1,2,[1,2]]].flat(Infinity) 不管嵌套层数</p>
        <p>{JSON.stringify([1,2,[1,2,[1,2]]].flat(Infinity))}</p>
      </li>
    </ul>
  </>
}

export default ArrayComponent