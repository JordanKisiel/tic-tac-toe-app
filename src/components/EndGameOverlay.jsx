import React from 'react'
import EndGameMessage from '../components/EndGameMessage'
import GameResult from '../components/GameResult'

export default function EndGameOverlay(props){

    return (
        <div className={`bg-black/50 animate-fade fixed inset-0 ${props.result === '' && 'hidden'}`}>
            <div className="bg-dark-blue/90 fixed inset-x-0 top-1/2 flex flex-col items-center py-10 animate-flip-in">
                <EndGameMessage 
                    result={props.result}
                    playerTurn={props.playerTurn}
                />
                <GameResult 
                    result={props.result}
                />
                <div className="flex flew-row gap-4">
                    <button onClick={props.handleEndGame} className="bg-gray rounded-lg text-base uppercase font-bold px-5 pt-2.5 pb-3.5 shadow-small shadow-[#6B8997] tracking-wide hover:bg-off-white">
                        Quit
                    </button>
                    <button onClick={props.handleResetBoard} className="bg-mustard-yellow rounded-lg text-base uppercase font-bold px-5 pt-2.5 pb-3.5 shadow-small shadow-[#CC8B13] tracking-wide hover:bg-light-yellow">
                        Next Round 
                    </button>
                </div>
            </div>
        </div>
    )
}