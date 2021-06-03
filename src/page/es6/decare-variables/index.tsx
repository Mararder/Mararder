import React from "react"

const DecareVariables: React.FC<any> = props => {
  const test = () => {
    const b = 5
          console.log(b)
          let a = 1;
          console.log(a)
          a = 4
          console.log(a)
          console.log('0.00'.padStart(20))            
          console.log('10,000.00'.padStart(20))    
          console.log('250,000.00'.padStart(20))    
          return b
  }
  return <>
    <h1>es6 声明变量的方法</h1>
    <hr />
    <h1>使用var声明变量</h1>
    <div>
      函数：
      () =&gt; 
        var a = 1
        return a
      
    </div>
    执行结果：
    {
      (() => {
        var a = 1
        return <>{a}</>
      })()
    }
    <hr />
    <h1>使用const声明变量</h1>
    <div>
      函数：
      () =&gt; 
      const a = 2
        return a
      
    </div>
    执行结果：
    {
      (() => {
        var a = 1
        return <>{a}</>
      })()
    }
    <hr />
    <h1>使用let声明变量</h1>
    <div>
      函数：
      () =&gt; 
      let a = 2
        return a
      
    </div>
    执行结果：
    {
      (() => {
        var a = 1
        return <>{a}</>
      })()
    }
    <hr />
    <h1>总结：var const let的区别</h1>
    <div>
      <p>const和let属于块级局部变量</p>
      <p>const声明就需要赋值且不能更改</p>
      <p>同一个作用域下const和let不能声明同名变量，而var可以</p>
      <p>var声明变量存在变量提升，let和const不存在变量提升</p>
      <p>let声明变量赋值后不能更改数据类型，而var可以</p>
      {test()}
    </div>
  </>
}

export default DecareVariables