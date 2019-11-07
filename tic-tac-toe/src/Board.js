import React,{ useState } from 'react';
import Square from './Square';


function Board(){
    const [board, setBoard] = useState(new Array(9));
    const [xIsNext, setxIsNext] = useState(true);

    const handleClick = index => {
        console.log("board game :",board)
        const square = [...board];
         if(Winner(board) ||  square[index]) return;
        
        square[index] = xIsNext ? " X ": " 0 ";
        console.log("square :",square[index]);
       
        setBoard(square);
        setxIsNext(!xIsNext);
    };

    Winner(board);

    const renderSquare = (index) => {
     return (<Square value={board[index]} onClick={() => handleClick(index)}/>)
 }

 const clearGrid =() => {
     setBoard('');
 }

 let status;
 const win = Winner(board);
 status = win ? `Winner is : ${win}` : null

 

    return (
    <div className="box">
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
            <h3>{status}</h3>
            <button onClick={() => clearGrid()}>NEW GAME</button>
         </div>
    )
}


function Winner(sq){
    let winnerArrayList = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]

    console.log("Checking Winner");
    console.log("sq: ",sq);
    for(let i =0;i<winnerArrayList.length ;i++) {
        let [a,b,c] = winnerArrayList[i];
        console.log("a :",a);
        console.log("b : ",b);
        console.log("c : ",c);

        if(sq[a] == sq[b] && sq[b]== sq[c]  && sq[c] == sq[a]){
            return sq[a];
        }
    }
    return null;
}

export default Board;