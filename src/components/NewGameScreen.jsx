import React from 'react'
import MarkPicker from '../components/MarkPicker'
import DifficultyPicker from '../components/DifficultyPicker'

export default function NewGameScreen(props){

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row gap-2 mb-8">
                <img className="w-8" src="./src/assets/icon-x.svg" />
                <img className="w-8" src="./src/assets/icon-o.svg" />
            </div>
            <MarkPicker 
                handleMarkPick={props.handleMarkPick} 
                firstPlayer={props.firstPlayer}
            />
            <div className="w-full">
                <DifficultyPicker 
                    handlePickDifficulty={props.handlePickDifficulty}
                    pickedDifficulty={props.pickedDifficulty}
                />
                <button onClick={props.handleNewGame} className="bg-mustard-yellow w-full rounded-2xl pt-3.5 pb-5 shadow-big shadow-[#CC8B13] uppercase font-bold tracking-wide hover:bg-light-yellow">New Game</button>
            </div>
        </div>
    )
}