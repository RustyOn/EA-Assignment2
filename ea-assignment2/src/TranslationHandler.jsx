import { render } from "@testing-library/react"
import React, { useState, createElement } from "react"
import CompDiv from "./CompDiv"
const images = require.context('./images', true, /\.(png)$/)
const imageList = images.keys().map(image => images(image))
let translations = []
let componentArray = []

// TODO:
// Limit characters
// comment code
// translation input to api
// readme

// Creates the image element for the translated symbols and adds it to an array for rendering
function CreateImgElement(symbol, index){
    let noPic = "No picture"
    let component = createElement(
        'img',
        { 
            src: symbol, 
            alt: noPic, 
            height: 50, 
            width: 50, 
            id: index,
            key: index
        },
        null
    )
    componentArray.push( component )
}

// Renders the div that holds the translated symbols (only for display on page change)
// TODO: should move
const RenderDiv = () => {
    render(CompDiv(null))
}


function TranslationHandler(){
    const [ text, setText ] = useState({value: ""})
    let textToTranslate = text.value
    let compareArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let symbolsToPrint = []
    let textSymbolsArray = []
    
    const handleTextChange = event =>{
        setText({ value: event.target.value })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        //console.log("this text was entered: " + text.value)
        textSymbolsArray = textToTranslate.split("")
        //console.log(textSymbolsArray)

        translations.push(text.value)

        checkAndRenderSymbols()
        //console.log(translations);
    } 
    
    function checkAndRenderSymbols (){
        Check()
        Render()
    }

    // Checks the array of entered symbols against the array of acceptable symbols before adding
    // the symbol with the same index to the print array 
    // TODO: rework this
    function Check(){
        componentArray = []
        symbolsToPrint = []

        for (let index = 0; index < textSymbolsArray.length; index++){
            const symbol = textSymbolsArray[index];
            for (let index = 0; index < compareArray.length; index++) {
                const element = compareArray[index];
                if(element === symbol){
                    console.log("Match")
                    const img = imageList[index]
                    symbolsToPrint.push(img)
                    break
                } else {
                    console.log("No Match")
                }
            }
        }
    }
    
    // Calls the create image function for every element that should be printed
    // renders teh parent div with symbols as children
    function Render(){
        for (let index = 0; index < symbolsToPrint.length; index++) {
            const symbol = symbolsToPrint[index];
            CreateImgElement(symbol, index)
        }
    }

    return(
        <>
            <div>
                <form onSubmit={ handleSubmit }>
                    <input type="text" value={ text.value } onChange = { handleTextChange }/>
                    <button type="submit" className="translate-button">Translate</button>
                </form>    
            </div>
            <div className="translation-box">
                { componentArray }
            </div>
        </>
    )
}

export { RenderDiv }
export default TranslationHandler
/**
 * <button onClick={ CleanUpComponents }>Clear</button>
 */