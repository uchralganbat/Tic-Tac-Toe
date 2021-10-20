import React, { useState } from 'react';
import './Board.css'
import Cell from './Cell';

const BOARD_SIZE = 3;

const Board = () => {
    const [board, setBoard] = useState(createBoard(BOARD_SIZE));
    const [player, setPlayer] = useState(false);
    const playerToggler = () => {
        player ? setPlayer(false) : setPlayer(true);
    }
    const lines = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]

    return (
        <>  
            <h1>{player ? "X's turn" : "O's turn"}</h1>
            <div>
                {board.map((row, rowIndex) => (
                    <div className='row' key={rowIndex}>
                        {row.map((value, colIndex) => {
                            return (<Cell 
                                        key={colIndex} 
                                        value={value} 
                                        player={player} 
                                        playerToggler={playerToggler}
                                    />)
                            })}
                    </div>))}
            </div>
        </>
    )
}

const createBoard = (BOARD_SIZE) => {
    let counter = 1;
    let board = [];

    for(var row = 0; row < BOARD_SIZE; row++) {
        let currentRow = [];
        for(var col = 0; col < BOARD_SIZE; col++) {
            currentRow.push(counter++);
        }
        board.push(currentRow);
    }
    return board;
}


export default Board;

