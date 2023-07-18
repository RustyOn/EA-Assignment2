import { useState } from "react"
import TranslationHandler from "./TranslationHandler"

let textSymbolsArray
function TranslationInput(){
    const [ text, setText ] = useState({value: ""})
    let textToTranslate = text.value
    textSymbolsArray = []

    const handleTextChange = event =>{
        setText({ value: event.target.value })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        console.log("this text was entered: " + text.value)
        textSymbolsArray = textToTranslate.split("")
        console.log(textSymbolsArray)
        
        //translations.push(text.value)

        //CleanUpComponents()
        //checkAndRenderSymbols()
        //console.log(translations);
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input type="text" value={ text.value } onChange = { handleTextChange }/>
            <button type="submit">Translate</button>
        </form>
    )
}

export const exportTextArray = textSymbolsArray
export default TranslationInput