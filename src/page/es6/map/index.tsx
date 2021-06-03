import React from "react"

const TestMap: React.FC<any> = props => {
  const myMap = new Map()
  const keyString = "a string"
  myMap.set(keyString, "aaaddkkl")
  const ARR: string[] = ["a", "b", "c"] 

  return <>
    <p>Map 是 ES6 中新增的数据结构，Map 类似于对象，但普通对象的 key 必须是字符串或者数字，而 Map 的 key 可以是任何数据类型</p>
    <p>使用是需要使用new Map()初始化一个实例</p>
    <div>
      <p>Map 实例的属性和方法如下：</p>
      <ul>
        <li>size：获取成员的数量</li>
        <li>set：设置成员 key 和 value</li>
        <li>get：获取成员属性值</li>
        <li>has：判断成员是否存在</li>
        <li>delete：删除成员</li>
        <li>clear：清空所有</li>
      </ul>
    </div>
    <p>
      测试1：{myMap.get(keyString)}
    </p>
    <p>
      测试2：{myMap.get("a string")}
    </p>
    <div>
      <p>Map 实例的遍历方法有：</p>
      <ul>
        <li>keys()：返回键名的遍历器。</li>
        <li>values()：返回键值的遍历器。</li>
        <li>entries()：返回所有成员的遍历器。</li>
        <li>forEach()：遍历 Map 的所有成员。</li>
      </ul>
    </div>
    <p>测试3：keys()</p>
    <p>
      {
        (() => {
          for (let key of myMap.keys() as any) {
            return key
          }
        })()
      }
    </p>
    <p>测试4：values()</p>
    <p>
      {
        (() => {
          for (let value of myMap.values() as any) {
            return value
          }
        })()
      }
    </p>
    <p>测试5：entries()</p>
    <p>
      {
        (() => {
          for (let entrie of myMap.entries() as any) {
            return entrie
          }
        })()
      }
    </p>
    <p>测试6：forEach()</p>
    <p>
      {
        (myMap as any).forEach((v: any, k: any) => {
          console.log(k, v)
        })
      }
    </p>
    <hr />
    <ul>
      {
        ARR.map(v => {
          return <li>{v}</li>
        })
      }
    </ul>
  </>
}

export default TestMap