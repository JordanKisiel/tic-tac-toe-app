import React from 'react'
import iconX from './src/assets/icon-x.svg'
import iconO from './src/assets/icon-o.svg'

export default function GameResult(props){

    let resultMessage = ''
    let imageToUse = ''
    let colorToUse = ''

    if(props.result === 'draw'){
        resultMessage = 'Round tied'
        colorToUse = 'text-gray'
    }
    else{
        resultMessage = 'Takes the round'
    }

    if(props.result === 'x'){
        imageToUse = 'icon-x.svg'
        colorToUse = 'text-medium-blue'
    }
    else if(props.result === 'o'){
        imageToUse = 'icon-o.svg'
        colorToUse = 'text-mustard-yellow'
    }

    return (
        <div className="flex flex-row items-center gap-2 mb-6 lg:gap-6">
            {props.result !== 'draw' && <img className="w-8 md:w-12 lg:w-20" src={`./src/assets/${imageToUse}`} alt="O icon" />}
            <span className={`${colorToUse} text-2xl font-bold tracking-wider md:text-4xl lg:text-5xl`}>{resultMessage}</span>
        </div>
    )
}