import React, { useState } from 'react'
import "./ReactiveInput.css"

interface ReactiveInputProps {
    label: string,
    maxLength?: number
}

const ReactiveInput: React.FunctionComponent<ReactiveInputProps> = ({ label, maxLength = Infinity }) => {
    const [currentInput, setCurrentInput] = useState("")

    return (
        <div className="reactiveInput">
            <label htmlFor="reactiveInput">{label}</label>
            <input
                type="text"
                name="reactiveInput"
                value={currentInput}
                onChange={(event) => {setCurrentInput(event.target.value)}}
            />
            <p className={currentInput.length > maxLength ? "invalid" : ""}>
                {currentInput}
            </p>
        </div>
    )
}

export default ReactiveInput
