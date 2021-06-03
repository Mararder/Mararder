import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout"
import 'antd/dist/antd.css';
export default class App extends React.Component {
  render() {
    return <Layout />
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));

