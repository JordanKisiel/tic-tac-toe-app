import React from 'react'
import iconXBlue from '/icon-x-blue.svg'
import iconOBlue from '/icon-o-blue.svg'
import iconX from '/icon-x.svg'
import iconO from '/icon-o.svg'
import iconXOutline from '/icon-x-outline.svg'
import iconOOutline from '/icon-o-outline.svg'

export default function Space(props){

    let imageToUse = ''
    let isEmpty = false

    let bgToUse = 'bg-dark-blue'
    if(props.winningLine.includes(props.id)){
        bgToUse = props.display === 'x' ? 'bg-medium-blue' : 'bg-mustard-yellow'
    }


    if(props.display === 'x'){
        if(props.winningLine.includes(props.id)){
            imageToUse = iconXBlue
        }
        else{
            imageToUse = iconX
        }
    }
    else if(props.display === 'o'){
        if(props.winningLine.includes(props.id)){
            imageToUse = iconOBlue
        }
        else{
            imageToUse = iconO
        }
    }
    else{
        isEmpty = true
    }
    
    let outlineToUse = ''
    
    if(props.firstPlayer && props.display === ''){
        outlineToUse = `hover:bg-[url('${iconXOutline}')]`
        outlineToUse = "hover:bg-[url('https://jordankisiel.github.io/tic-tac-toe-app/icon-x-outline.svg')]" 
    }
    else if(!props.firstPlayer && props.display === ''){
        outlineToUse = `hover:bg-[url('${iconOOutline}')]`
        outlineToUse = "hover:bg-[url('https://jordankisiel.github.io/tic-tac-toe-app/icon-o-outline.svg')]"
    }
    
    function handleSpaceClick(){
        if(props.display === '' && props.playerTurn){
            props.handleFillSpace(props.firstPlayer ? 'x' : 'o', Number(props.id))
        }
    }

    return (
        <div onClick={() => handleSpaceClick()} className={`${bgToUse} shadow-big aspect-square rounded-lg flex flex-row justify-center items-center ${props.playerTurn ? 'cursor-pointer' : ''} hover:bg-no-repeat hover:bg-center hover:bg-[length:50%] ${props.playerTurn ? 'hover:bg-[#28434f]' : ''}  ${props.playerTurn ? outlineToUse : ''}`}>
            {!isEmpty && <img className="w-12 -mt-1 md:w-16 lg:w-24" src={imageToUse} />}
        </div>
    )
}