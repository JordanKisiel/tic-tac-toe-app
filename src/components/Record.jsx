import React from 'react'

export default function Record(props){

    let playerSpecification = ''
    if(props.label !== 'draws'){
        if(props.firstPlayer && props.label === 'x'){
            playerSpecification = '(you)'
        }
        else if(!props.firstPlayer && props.label === 'o'){
            playerSpecification = '(you)'
        }
        else{
            playerSpecification = '(cpu)'
        }
    }

    return (
        <div className={`${props.color} flex flex-col items-center rounded-lg py-3 w-full`}>
            <p className="text-sm tracking-tight">{`${props.label} ${playerSpecification}`}</p>
            <p className="font-bold text-xl tracking-wide">{props.numDisplay}</p>
        </div>    
    )
}