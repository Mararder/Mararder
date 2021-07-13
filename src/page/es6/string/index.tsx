import React, { useState } from "react"

const StringTest: React.FC = () => {
  const [testString] = useState<string>("apple,banana,orange,")
  return <>
    <h2>ES 6 字符串</h2>
    <h3>子串的识别</h3>
    <p>ES6 之前判断字符串是否包含子串，用 indexOf 方法，ES6 新增了子串的识别方法。</p>
    <ul>
      <li>
        string.includes(): 返回布尔值，判断是否找到字符串，找到返回true，未找到返回false
      </li>
      <li>
        string.startsWith(): 返回布尔值，判断参数字符串是否在原字符串头部，在头部返回true，不在头部返回false
      </li>
      <li>
        string.endsWith(): 返回布尔值， 判断参数字符串是否在原字符串尾部，在尾部返回true，不在尾部返回false
      </li>
    </ul>
    <h3>测试实例</h3>
    <h4>string.includes 测试</h4>
    <ul>
      <li>
        <p>测试“{testString}”是否包含“apple”</p>
        <p>“{testString}”{testString.includes("apple") ? "包含" : "不包含"}"apple"</p>
        <p>测试“{testString}”是否包含“test”</p>
        <p>“{testString}”{testString.includes("test") ?  "包含" : "不包含"}“test”</p>
      </li>
    </ul>
    <h4>string.startsWith 测试</h4>
    <ul>
      <li>
        <p>测试“{testString}”是头部否包含“apple”</p>
        <p>“{testString}”{testString.startsWith("apple") ? "头部包含" : "头部不包含"}"apple"</p>
        <p>测试“{testString}”是头部否包含“test”</p>
        <p>“{testString}”{testString.includes("test") ?  "头部包含" : "头部不包含"}“test”</p>
      </li>
    </ul>
    <h3>字符串重复</h3>
    <ul>
      <li>
        string.repeat(v): 返回新的字符串，v是参数表示将字符串重复指定次数返回，
        如果参数是小数，向下取整；如果参数是 0 至 -1 之间的小数，会进行取整运算，0 至 -1 之间的小数取整得到 -0 ，等同于 repeat 零次；
        如果参数是 NaN，等同于 repeat 零次；如果参数是 NaN，等同于 repeat 零次；如果参数是负数或者 Infinity ，会报错；
        如果传入的参数是字符串，则会先将字符串转化为数字；
      </li>
    </ul>
    <h4>string.repeat 测试</h4>
    <ul>
      <li>
        <p>string.repeat(2)</p>
        <p>{testString.repeat(2)}</p>
        <p>string.repeat(3.5)</p>
        <p>{testString.repeat(3.5)}</p>
        <p>string.repeat(0.5)</p>
        <p>{testString.repeat(0.5)}</p>
      </li>
    </ul>
    <h3>字符串补全</h3>
    <ul>
      <li>
        string.padStart: 返回新的字符串，表示用参数字符串从头部（左侧）补全字符串
        <p>{testString.padStart(30, "o")}</p>
        <p></p>
        <p></p>
      </li>
      <li>
        string.padEnd: 返回新的字符串，表示用参数字符串从尾部（右侧）补全字符串
        <p>{testString.padEnd(30, "o")}</p>
      </li>
      <li>
        <p>如果指定的长度小于或等于原字符串长度，则返回原字符串</p>
        {testString.padStart(10)}
      </li>
      <li>
        <p>如果原字符串加上补全字符串长度大于指定长度，则截去超出位数的补全字符串</p>
        {testString.padStart(25, "ksadfflojflajdfieaiukjjk")}
      </li>
    </ul>
  </>
}


export default StringTest