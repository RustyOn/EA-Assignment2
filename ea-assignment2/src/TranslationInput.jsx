import React, { useState, createElement } from "react"
import { compArrayEx } from "./TranslationHandler"

let textToExport = ""
let countToExport = 0
function Input(){
    const [ text, setText ] = useState({value: ""})
    const [count, setCount] = useState(0);
    let textT = text.value
    const handleTextChange = event =>{
        setText({ value: event.target.value })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        textToExport = text.value
        console.log(text.value)
        setCount(count + 1)
        countToExport = count
        console.log(count)
    }

    const TranslationInput = createElement(
        'input',
        { type: 'text', value: textT, onChange: handleTextChange},
        null
    )

    const TranslationButton = createElement(
        'button',
        { type: 'submit', className: 'translate-button'},
        "Translate"
    )

    const TranslationForm = createElement(
        'form',
        { onSubmit: handleSubmit },
        TranslationInput,
        TranslationButton
    )

    const TranslationWrapper = createElement(
        'div',
        { className: 'translation-back'},
        TranslationForm,
        compArrayEx
    )

    return TranslationWrapper
}
export const countExport = countToExport
export const textExport = textToExport
export default Input