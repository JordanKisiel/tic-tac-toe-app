import React from 'react'
import Record from '../components/Record'

export default function GameHistory(props){

    return (
        <div className="flex flex-row justify-between w-full text-very-dark-blue gap-5">
            <Record
                numDisplay={props.firstPlayer ? props.playerWins : props.cpuWins} 
                label='x'
                color='bg-medium-blue'
                firstPlayer={props.firstPlayer}
            />
            <Record
                numDisplay={props.draws}  
                label='draws'
                color='bg-gray'
                firstPlayer={props.firstPlayer}
            />
            <Record
                numDisplay={!props.firstPlayer ? props.playerWins : props.cpuWins}  
                label='o'
                color='bg-mustard-yellow'
                firstPlayer={props.firstPlayer}
            />
        </div>
    )
}