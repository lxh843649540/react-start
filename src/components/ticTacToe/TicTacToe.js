import React from 'react';
import './ticTacToe.css'

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {}
//       </button>
//     );
//   }
// }
const Square = (i) => {
  return (
    <button className="square">
      {1}
    </button>
  );
};

class Board extends React.Component {
  // renderSquare(i) {
  //   return <Square/>;
  // }
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {Square(0)}
          {Square(1)}
          {Square(2)}
        </div>
        <div className="board-row">
          {Square(3)}
          {Square(4)}
          {Square(5)}
        </div>
        <div className="board-row">
          {Square(6)}
          {Square(7)}
          {Square(8)}
        </div>
      </div>
    );
  }
}

class TicTacToe extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default TicTacToe;
