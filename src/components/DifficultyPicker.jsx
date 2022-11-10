import React from 'react'

export default function DifficultyPicker(props){

    const skillLevels = [
        'easy',
        'medium',
        'hard',
        'impossible'
    ]

    const difficultyBtns = skillLevels.map((skillLevel) => {
        return (
            <button onClick={() => props.handlePickDifficulty(skillLevel)} className={`${props.pickedDifficulty === skillLevel ? 'bg-gray text-very-dark-blue' : 'hover:bg-gray/5'} rounded-lg w-full py-3 uppercase tracking-wide`} key={skillLevel}>
                {skillLevel}
            </button>
        )
    })

    return (
        <fieldset className="bg-dark-blue w-full rounded-2xl shadow-big shadow-[#10212A] uppercase font-bold mb-4 px-6 pt-5 pb-7 text-gray flex flex-col items-center space-y-3">
            <h2 className="text-base tracking-wide">Select Difficulty</h2>
            <div className="bg-very-dark-blue rounded-lg w-full flex flex-col items-center p-2.5 space-y-3">
                {difficultyBtns}
            </div>
        </fieldset>
    )
}