import React from "react";

const NumberComponent: React.FC = () => {
  return <>
    <h2>es6 数值 Number</h2>
    <h3>Number 对象新方法</h3>
    <ul>
      <li>Number.isFinite() 用于检查一个数值是否为有限的（finite）,既不是Infinity</li>
    </ul>
    <h4>测试实例</h4>
    <ul>
      <li>
        <p>Number.isFinite(1)</p>
        <p>{Number.isFinite(1) ? "true" : "false"}</p>
      </li>
      <li>
        <p>Number.isFinite(0.2)</p>
        <p>{Number.isFinite(0.2) ? "true" : "false"}</p>
      </li>
      <li>
        <p>Number.isFinite("44")</p>
        <p>{Number.isFinite("44") ? "true" : "false"}</p>
      </li>
    </ul> 
    <h3>Number 对象其他方法</h3>    
    <ul>
      <li>Number.parseInt 用于将给定的字符转化成指定进制的整数，默认是十进制</li>
      <li>Number.parseFloat 用于将字符串解析成浮点数</li>
      <li>Number.isInteger 用于判断给定的参数是否为整数</li>
    </ul>  
    <h4>测试实例</h4> 
    <ul>
      <li>
        <p>Number.parseInt("1.5")</p>
        <p>{Number.parseInt("1.5").toFixed(2)}</p>
      </li>
      <li>
        <p>Number.parseInt("0.5")</p>
        <p>{Number.parseInt("0.5")}</p>
      </li>
      <li>
        <p>Number.parseInt("-1.5")</p>
        <p>{Number.parseInt("-1.5")}</p>
      </li>
      <li>
        <p>Number.parseInt("jhjh")</p>
        <p>{Number.parseInt("jhjh")}</p>
      </li>
      <li>
        <p>Number.parseFloat("1.5")</p>
        <p>{Number.parseFloat("1.5")}</p>
      </li>
      <li>
        <p>Number.parseFloat("1.5pppp666")</p>
        <p>{Number.parseFloat("1.5pppp666")}</p>
      </li>
      <li>
        <p>Number.parseFloat("ppp666.35")</p>
        <p>{Number.parseFloat("ppp666.35")}</p>
      </li>
      <li>
        <p>Number.isInteger("1")</p>
        <p>{Number.isInteger("1") ? "是整数" : "不是整数"}</p>
      </li>
      <li>
        <p>Number.isInteger(1)</p>
        <p>{Number.isInteger(1) ? "是整数" : "不是整数"}</p>
      </li>
      <li>
        <p>Number.isInteger(1.2)</p>
        <p>{Number.isInteger(1.2) ? "是整数" : "不是整数"}</p>
      </li>
    </ul>
  </>
}

export default NumberComponent