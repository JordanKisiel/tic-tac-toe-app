import React from "react"
import NewGameScreen from "./components/NewGameScreen"
import Game from './components/Game'

export default function App(){

    /*
        TODO:
            -add animations
            -upload to github (remember bookmark that talks about deploying build version)
    */


    const [isGameInProgress, setIsGameInProgress] = React.useState(false)
    const [isFirstPlayer, setIsFirstPlayer] = React.useState(true)
    const [difficulty, setDifficulty] = React.useState('easy')

    function startGame(){
        setIsGameInProgress(true)
    }

    function pickMark(isX){
        setIsFirstPlayer(isX ? true : false)
    }

    function pickDifficulty(difficulty){
        setDifficulty(difficulty)
    }

    function endGame(){
        setIsGameInProgress(false)
    }


    return (
        <>
            {
                !isGameInProgress ? 
                <NewGameScreen
                    firstPlayer={isFirstPlayer}
                    pickedDifficulty={difficulty} 
                    handleNewGame={startGame} 
                    handleMarkPick={pickMark}
                    handlePickDifficulty={pickDifficulty} 
                /> 
                : 
                <Game 
                    firstPlayer={isFirstPlayer}
                    pickedDifficulty={difficulty}
                    gameInProgress={isGameInProgress}
                    handleEndGame={endGame}
                />
            }
        </>
    )
}