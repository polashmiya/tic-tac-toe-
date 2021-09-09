import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";
const style = {
  width: "200px",
  margin: "30px auto",
};
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  //it is used for timeTravel
  // const jumpToBoard = () => {};
  const renderMoves = () => {
    return (
      <div style={style}>
        <button
          style={{ padding: "6px", cursor: "pointer" }}
          onClick={() => setBoard(Array(9).fill(null))}
        >
          Play Again
        </button>
      </div>
    );
  };
  return (
    <>
      <div style={style}>
        <p>{"Next Player : " + (xIsNext ? "X" : "O")}</p>
        <p>{winner && "Winner is : " + winner}</p>
      </div>
      <Board squares={board} onClick={handleClick} />
      {renderMoves()}
    </>
  );
};

export default Game;
