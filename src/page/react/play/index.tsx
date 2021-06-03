import React from "react";
import "./index.css";

/**
 * 通讯示例
 */
// function initialize() {
//   if (window.top) {
//     /**
//      * 告诉父级window iframe已加载完毕
//      */
//     debugger;
//     window.top.postMessage(
//       JSON.stringify({
//         loaded: true, // 是否加载完毕
//         id: "id", // 用于区分iframe
//       }),
//       "*"
//     );
//     addEvent(window, "message", function listener(e) {
//       debugger;
//       /**
//        * @param {Object} data - {tjdw: string}
//        * @example {tjdw: '11'}
//        */
//       const data = JSON.parse(e.data || "{}");
//     });
//   }
// }
// function addEvent(element, type, callback) {
//   if (element.addEventListener) {
//     element.addEventListener(type, callback, false);
//   } else if (element.attachEvent) {
//     element.attachEvent("on" + type, callback);
//   }
// }
// window.onload = function () {
//   initialize();
// };

function Square(props: any) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    // @ts-ignore
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // @ts-ignore
    squares[i] = this.state.xIsNext ? "x" : "O";
    // @ts-ignore
    this.setState({ squares, xIsNext: !this.state.xIsNext });
  }

  renderSquare(i: number) {
    return (
      <Square
        // @ts-ignore
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    // @ts-ignore
    const status = "Next player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default class Play extends React.Component {
  render() {
    return (
      <>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </>
    );
  }
}

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
