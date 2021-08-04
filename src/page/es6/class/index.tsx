import React from "react"
import { Button } from "antd"

const ClassCompontent: React.FC = () => {
  class A {
    a: number
    constructor() {
      this.a = 1
    }
    sayA () {
      alert(this.a)
    }
  }
  class B extends A {
    b: number
    constructor() {
      super();
      this.b = this.a
      this.a = 2
    }
    stop () {
      super.sayA();
    }
  }
  const c = new B();
  return <div>
    <p>{c.a}</p>
    <p>{c.b}</p>
    <Button onClick={c.stop.bind(c)}>click</Button>
  </div>
}

export default ClassCompontent