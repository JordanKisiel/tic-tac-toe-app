import React from 'react'
import Space from '../components/Space'

export default function Board(props){

    function getWinningLine(){
        const winningLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        let i = 0
        const allEqual = array => array.every(val => val === array[0])
    
        while(i < winningLines.length){
            const line = winningLines[i]

            const lineState = [props.board[line[0]], props.board[line[1]], props.board[line[2]]]

            if(lineState[0] !== ''){
                if(allEqual(lineState)){
                    return line
                }
            }

            i++
        }
    }

    const spaces = props.board.map((space, index) => {
        return (
            <Space 
                display={space} 
                key={index}
                id={index} 
                firstPlayer={props.firstPlayer}
                playerTurn={props.playerTurn}
                handleFillSpace={props.handleFillSpace}
                winningLine={(props.result === 'x' || props.result === 'o') ? getWinningLine() : []}
            />
        )
    })


    return (
        <div className="w-full grid grid-cols-3 auto-rows-max gap-5 mb-8">
            {spaces}
        </div>
    )
}