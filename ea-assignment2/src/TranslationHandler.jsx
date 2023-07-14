import { useState } from "react"
//import img from './images/a.png'
const images = require.context('./images', true, /\.(png)$/)
const imageList = images.keys().map(image => images(image))

// TODO: 
// connect to symbol library
// --Split words into single symbols--
// return correct symbols

function TranslationHandler(){
    const [ text, setText ] = useState({value: ""})
    let textSymbolsArray = []

    const handleTextChange = event =>{
        setText({ value: event.target.value })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        console.log("this text was entered: " + text.value)
         textSymbolsArray = textToTranslate.split("")
        console.log(textSymbolsArray)
    }
    
    let textToTranslate = text.value
    
    
    let symbolsToPrint = []
    textSymbolsArray.forEach(symbol => {

        //TODO: compare symbols to database and add to print
        //loop through to compare?
        //return symbol if match found
        //if no match - ignore? / remove from array
    });


    //<img src={img} alt="Logo" />
    return(
        <>
            <form onSubmit={ handleSubmit }>
                <fieldset>
                    <input type="text" value={ text.value } onChange= { handleTextChange }/>
                    <button type="submit" >Translate</button>
                </fieldset>
            </form>
            <p>
                Text translation
            </p>
            <div>
                {imageList.map((image, index) => (
                    <img key={index} src={image} alt={`image-${index}`} />
                ))}
            </div>
        </>
        
    )
}

export default TranslationHandler