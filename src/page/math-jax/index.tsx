import React from "react"
import MathJax from "react-mathjax"

const TestMathJax: React.FC<any> = props => {
  return <>
  <h1>使用mathjax工具实现数学公式展示</h1>
  <MathJax.Provider>
    <label>公式</label><MathJax.Node formula={'A {A-B \\over C}'} />
    <label>公式2</label><MathJax.Node formula={'A \\over b'} />
  </MathJax.Provider>
  </>
}

export default TestMathJax