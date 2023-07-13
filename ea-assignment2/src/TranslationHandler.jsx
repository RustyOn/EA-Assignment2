import { useState } from "react"

// TODO: 
// connect to symbol library
// Split words into single symbols
// return correct symbols

function TranslationHandler(){
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

    
    let textToTranslate = text.value
    const textSymbolsArray = textToTranslate.split("")
    console.log(textSymbolsArray)

    return(
        <>
            <form onSubmit={ handleSubmit }>
                <fieldset>
                    <input type="text" value={ text.value } onChange= { handleTextChange }/>
                    <button type="submit" disabled>Translate</button>
                </fieldset>
            </form>
            <p>
                Text translation
            </p>
        </>
        
    )
}

export default TranslationHandler