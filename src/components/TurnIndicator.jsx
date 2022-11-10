import React from 'react'
import iconXGray from '/icon-o-gray.svg'
import iconOGray from '/icon-o-gray.svg'

export default function TurnIndicator(props){

    const playerMark = props.firstPlayer ? iconXGray : iconOGray
    const cpuMark = !props.firstPlayer ? iconXGray : iconOGray

    return (
        <div className="bg-dark-blue text-gray rounded-lg flex flex-row justify-between items-center shadow-small gap-3 px-4 pt-2.5 pb-3">
            <img className="w-4 md:w-6" src={`${props.playerTurn ? playerMark : cpuMark}`} alt="X icon" />
            <span className="text-sm font-bold tracking-wide md:text-base">Turn</span>
        </div>
    )
}