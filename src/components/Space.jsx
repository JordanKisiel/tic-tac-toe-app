import React from 'react'

export default function Space(props){

    let imageToUse = ''
    let isEmpty = false

    let bgToUse = 'bg-dark-blue'
    if(props.winningLine.includes(props.id)){
        bgToUse = props.display === 'x' ? 'bg-medium-blue' : 'bg-mustard-yellow'
    }


    if(props.display === 'x'){
        if(props.winningLine.includes(props.id)){
            imageToUse = 'icon-x-blue.svg'
        }
        else{
            imageToUse = 'icon-x.svg'
        }
    }
    else if(props.display === 'o'){
        if(props.winningLine.includes(props.id)){
            imageToUse = 'icon-o-blue.svg'
        }
        else{
            imageToUse = 'icon-o.svg'
        }
    }
    else{
        isEmpty = true
    }
    
    let outlineToUse = ''
    
    if(props.firstPlayer && props.display === ''){
        outlineToUse = "hover:bg-[url('/assets/icon-x-outline.svg')]" 
    }
    else if(!props.firstPlayer && props.display === ''){
        outlineToUse = "hover:bg-[url('/assets/icon-o-outline.svg')]"
    }
    
    function handleSpaceClick(){
        if(props.display === '' && props.playerTurn){
            props.handleFillSpace(props.firstPlayer ? 'x' : 'o', Number(props.id))
        }
    }

    return (
        <div onClick={() => handleSpaceClick()} className={`${bgToUse} shadow-big aspect-square rounded-lg flex flex-row justify-center items-center ${props.playerTurn ? 'cursor-pointer' : ''} hover:bg-no-repeat hover:bg-center hover:bg-[length:50%] ${props.playerTurn ? 'hover:bg-[#28434f]' : ''}  ${props.playerTurn ? outlineToUse : ''}`}>
            {!isEmpty && <img className="w-12 -mt-1 md:w-16 lg:w-24" src={`/assets/${imageToUse}`} />}
        </div>
    )
}