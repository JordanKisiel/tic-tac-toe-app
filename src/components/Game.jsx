import React from 'react'
import TurnIndicator from '../components/TurnIndicator'
import Board from '../components/Board'
import GameHistory from '../components/GameHistory'
import EndGameOverlay from '../components/EndGameOverlay'
import Minimax from 'tic-tac-toe-minimax'
import iconX from './src/assets/icon-x.svg'
import iconO from './src/assets/icon-o.svg'
import iconRestart from './src/assets/icon-restart.svg'


export default function Game(props){

    //board state
    const [board, setBoard] = React.useState(Array(9).fill(''))

    //in ms
    const CPU_THINKING_TIME = 1700
    const EASY_BLUNDER_PERCENT = 0.9
    const MEDIUM_BLUNDER_PERCENT = 0.5
    const HARD_BLUNDER_PERCENT = 0.1

    //player turn calculated based on board state and firstPlayer state passed in through props
    const numOpenSpaces = board.filter((space) => (space === '')).length
    const isOpenSpacesOdd = (numOpenSpaces % 2 === 1)
    let isPlayerTurn = (isOpenSpacesOdd && props.firstPlayer) || (!isOpenSpacesOdd && !props.firstPlayer)

    //result calculated based on board state
    let result = ''
    if(!isWinner(board) && numOpenSpaces === 0){
        // this is a draw
        result = 'draw'
    }
    else if(isWinner(board)){

        //flip value back to what it was the previous turn because that was the winner
        isPlayerTurn = !isPlayerTurn
        
        if(isPlayerTurn){
            result = props.firstPlayer ? 'x' : 'o'
        }
        else{
            result = !props.firstPlayer ? 'x' : 'o'
        }
    }

    function isWinner(boardState){
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

        let isWin = false
        let i = 0
        const allEqual = array => array.every(val => val === array[0])
        
        while(!isWin && i < winningLines.length){
            const line = winningLines[i]

            const lineState = [boardState[line[0]], boardState[line[1]], boardState[line[2]]]

            if(lineState[0] !== ''){
                isWin = allEqual(lineState)
            }

            i++
        }

        return isWin
    }

    function fillSpace(mark, index){
        if(!isWinner(board)){
            setBoard((prevBoard) => {
                const newBoard = prevBoard.slice()
                newBoard.splice(index, 1, mark)
                return newBoard
            })
        }
    }

    function playCPUTurn(){
        const { ComputerMove } = Minimax
        
        const huPlayer = props.firstPlayer ? 'X' : 'O'
        const aiPlayer = props.firstPlayer ? 'O' : 'X'
        const symbols = {
            huPlayer: huPlayer,
            aiPlayer: aiPlayer
        }
        const difficulty = "Hard"

        let boardCopy = board.slice()
        boardCopy = boardCopy.map((space, index) => {
            if(space === ''){
                return index
            }
            else{
                if(space === huPlayer.toLowerCase()){
                    return huPlayer
                }
                else{
                    return aiPlayer
                }
            }
        })
        
        let nextMove = ComputerMove( boardCopy, symbols, difficulty )
        
        const randomNum = Math.random()

        if(props.pickedDifficulty === 'easy' && EASY_BLUNDER_PERCENT > randomNum){
            nextMove = getRandomMove(boardCopy)
        }
        else if(props.pickedDifficulty === 'medium' && MEDIUM_BLUNDER_PERCENT > randomNum){
            nextMove = getRandomMove(boardCopy)
        }
        else if(props.pickedDifficulty === 'hard' && HARD_BLUNDER_PERCENT > randomNum){
            nextMove = getRandomMove(boardCopy)
        }


        fillSpace(aiPlayer.toLowerCase(), nextMove)
    } 
    
    function getRandomMove(board){
        let openSpaces = board.map((space, index) => {
            if(space === ''){
                return index
            }
            else{
                return space
            }
        })

        openSpaces = openSpaces.filter((space) => {
            return (typeof space === "number")
        })

        const randomIndex = Math.floor(Math.random() * openSpaces.length)

        return openSpaces[randomIndex]
    }

    function resetBoard(){
        setBoard(Array(9).fill(''))
    }

    //add delay to CPU to simulate thinking
    const firstUpdate = React.useRef(true)
    React.useEffect(() => {
        let timedCPUTurn = null

        //prevent running on first render
        if(firstUpdate.current){
            firstUpdate.current = false
            return
        }

        if(numOpenSpaces > 0){
            if(!isPlayerTurn){
                timedCPUTurn = setTimeout(playCPUTurn, CPU_THINKING_TIME)
            }
        } 

        //clean up
        return () => clearTimeout(timedCPUTurn)
    }, [isPlayerTurn]) 


    //record wins and losses in localStorage
    //initialize from localStorage if it exists
    const [playerWins, setPlayerWins] = React.useState(0)
    const [cpuWins, setCPUWins] = React.useState(0)
    const [draws, setDraws] = React.useState(0)
    
    React.useEffect(() => {
        if(localStorage.getItem('playerWins')){
            setPlayerWins(Number(localStorage.getItem('playerWins')))
        }
        if(localStorage.getItem('cpuWins')){
            setCPUWins(Number(localStorage.getItem('cpuWins')))
        }
        if(localStorage.getItem('draws')){
            setDraws(Number(localStorage.getItem('draws')))
        }

        //update on result
        if((props.firstPlayer && result === 'x') || (!props.firstPlayer && result === 'o')){
            let previousWins = 0
            if(localStorage.getItem('playerWins')){
                previousWins = Number(localStorage.getItem('playerWins'))
            }
            localStorage.setItem('playerWins', `${previousWins + 1}`)
            setPlayerWins((prevValue) => prevValue + 1)
        }
        else if((!props.firstPlayer && result === 'x') || (props.firstPlayer && result === 'o')){
            let previousWins = 0
            if(localStorage.getItem('cpuWins')){
                previousWins = Number(localStorage.getItem('cpuWins'))
            }
            localStorage.setItem('cpuWins', `${previousWins + 1}`)
            setCPUWins((prevValue) => prevValue + 1)
        }
        else if(result === 'draw'){
            let previousDraws = 0
            if(localStorage.getItem('draws')){
                previousDraws = Number(localStorage.getItem('draws'))
            }
            localStorage.setItem('draws', `${previousDraws + 1}`)
            setDraws((prevValue) => prevValue + 1)
        }
    }, [result])

    function clearGameHistory(){
        localStorage.clear()

        setPlayerWins(0)
        setCPUWins(0)
        setDraws(0)
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-between items-center w-full mb-16 md:mb-8">
                <div className="flex flex-row gap-2">
                    <img className="w-8 md:w-10" src={iconX} alt="X icon" />
                    <img className="w-8 md:w-10" src={iconO} alt="O icon" />
                </div>
                <TurnIndicator 
                    firstPlayer={props.firstPlayer}
                    playerTurn={isPlayerTurn}
                />
                
            </div>
            
            <Board 
                board={board}
                firstPlayer={props.firstPlayer}
                playerTurn={isPlayerTurn}
                handleFillSpace={fillSpace}
                result={result}
            />
            <GameHistory 
                playerWins={playerWins}
                cpuWins={cpuWins}
                draws={draws}
                firstPlayer={props.firstPlayer}
            />
            <button onClick={clearGameHistory} className="bg-gray shadow-small shadow-[#6B8997] p-3 rounded-lg hover:bg-off-white w-full flex flex-row justify-center gap-3 uppercase font-bold py-6 mt-6">
                Reset Record
                <img className="w-4 md:w-6" src={iconRestart} alt="Restart icon" />
            </button>
            <EndGameOverlay 
                playerTurn={isPlayerTurn}
                result={result}
                handleResetBoard={resetBoard}
                handleEndGame={props.handleEndGame}
            />
        </div>
    )
}