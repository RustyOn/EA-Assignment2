import { useState } from "react"
import TranslationHandler from "./TranslationHandler"

function TranslationInput(){
    const [ text, setText ] = useState({value: ""})

    const handleTextChange = event =>{
        setText({ value: event.target.value })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        console.log("thi text was entered: " + text.value)
        TranslationHandler()
        //TODO: connect to translationHandler
    }

    const textToTranslate = text.value

    return(
        <form onSubmit={ handleSubmit }>
            <fieldset>
                <input type="text" value={ text.value } onChange= { handleTextChange }/>
                <button type="submit">Translate</button>
            </fieldset>
        </form>
    )
}

export default TranslationInput