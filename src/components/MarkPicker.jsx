import React from "react"
import iconXBlue from '/icon-x-blue.svg'
import iconOBlue from '/icon-o-blue.svg'
import iconXGray from '/icon-x-gray.svg'
import iconOGray from '/icon-o-gray.svg'


export default function MarkPicker(props){

    return (
        <div className="bg-dark-blue rounded-2xl p-6 shadow-big text-gray flex flex-col items-center w-full space-y-5 mb-8">
            <h2 className="text-base tracking-wide">Select Your Mark</h2>
            <div className="bg-very-dark-blue w-full flex flex-row justify-between px-2 py-2.5 rounded-xl gap-1">
                <button onClick={() => props.handleMarkPick(true)} className={`${props.firstPlayer ? 'bg-gray' : 'hover:bg-gray/5'} w-full rounded-xl flex flex-row justify-center items-center`}>
                    <img className="w-8" src={`${props.firstPlayer ? iconXBlue : iconXGray}`} alt="X icon" />
                </button>
                <button onClick={() => props.handleMarkPick(false)} className={`${!props.firstPlayer ? 'bg-gray' : 'hover:bg-gray/5'} rounded-xl w-full flex flex-row justify-center items-center`}>
                    <img className="w-8 py-3" src={`${props.firstPlayer ? iconOBlue : iconOGray}`} alt="O icon" />
                </button>
            </div>
            <p className="opacity-50 text-sm tracking-wide">Remember: X goes first</p>
        </div>
    )
}