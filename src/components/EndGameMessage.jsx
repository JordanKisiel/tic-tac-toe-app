import React from 'react'

export default function EndGameMessage(props){

    //displays different messages to the user depending on the result of the game

    let message = ''

    if(props.result === 'draw'){
        message = 'A draw... Could be worse 🙃'
    }
    else{
        if(props.playerTurn){
            message = 'You win! Well played 😎'
        }
        else{
            message = 'You lost. Better luck next time 😥'
        }
    }
    

    return (
        <p className="text-gray text-sm tracking-wide mb-4 md:text-lg">
            {message}
        </p>
    )
}