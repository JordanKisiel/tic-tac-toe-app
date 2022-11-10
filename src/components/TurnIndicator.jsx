import React from 'react'

export default function TurnIndicator(props){

    const playerMark = props.firstPlayer ? 'icon-x-gray.svg' : 'icon-o-gray.svg'
    const cpuMark = !props.firstPlayer ? 'icon-x-gray.svg' : 'icon-o-gray.svg'

    return (
        <div className="bg-dark-blue text-gray rounded-lg flex flex-row justify-between items-center shadow-small gap-3 px-4 pt-2.5 pb-3">
            <img className="w-4 md:w-6" src={`./src/assets/${props.playerTurn ? playerMark : cpuMark}`} alt="X icon" />
            <span className="text-sm font-bold tracking-wide md:text-base">Turn</span>
        </div>
    )
}