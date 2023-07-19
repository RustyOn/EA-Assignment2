import React, { useState, createElement, createContext } from "react"
import { OnSubmit, compArrayEx } from "./TranslationHandler"

//let textToExport = ""
let textToExport = ""
//let countToExport = 0
//const submittedContext = createContext('submitted')

function Input(){
    const [ text, setText ] = useState({value: ""})
    //const [isSubmitted, setSubmitted] = useState(null);
    
    let textT = text.value
    const handleTextChange = event =>{
        setText({ value: event.target.value })
    }
    const handleSubmit = event =>{
        event.preventDefault()
        //textToExport = text.value
        textToExport = text.value
        console.log(text.value)
        OnSubmit()
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
//export const countExport = countToExport
export { textToExport }
export default Input