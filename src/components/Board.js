import React from "react";
import Square from "./Square";
const style = {
  width: "250px",
  height: "250px",
  margin: "50px auto",
  display: "grid",
  gridTemplate: "repeat(3,1fr)/repeat(3,1fr)",
};
const Board = ({ squares, onClick }) => {
  return (
    <div style={style}>
      {squares.map((square, i) => {
        return <Square key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  );
};

export default Board;
