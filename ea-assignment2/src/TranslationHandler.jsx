import { cleanup, render } from "@testing-library/react"
import React, { useState, createElement } from "react"
import CompDiv from "./CompDiv"
import { startDiv } from "./CompDiv"
const images = require.context('./images', true, /\.(png)$/)
const imageList = images.keys().map(image => images(image))
let translations = []
let componentArray = []

function CreateImgElement(symbol, index){
    let noPic = "No picture"
    let component = createElement(
        'img',
        { src: symbol, alt: noPic, height: 50, width: 50, id: index },
        null
    )
    componentArray.push(component)
}

const RenderDiv = () => {
    render(CompDiv(null))
}
RenderDiv()

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
        console.log("this text was entered: " + text.value)
        textSymbolsArray = textToTranslate.split("")
        console.log(textSymbolsArray)

        translations.push(text.value)

        CleanUpComponents()
        checkAndRenderSymbols()
        console.log(translations);
    } 
    
    function checkAndRenderSymbols (){
        CleanUpComponents()
        Check()
        Render()
    }

    function Check(){
        componentArray = []
        symbolsToPrint = []

        for (let index = 0; index < textSymbolsArray.length; index++){
            const symbol = textSymbolsArray[index];
            loop1:
            for (let index = 0; index < compareArray.length; index++) {
                const element = compareArray[index];
                if(element === symbol){
                    console.log("Match")
                    const img = imageList[index]
                    symbolsToPrint.push(img)
                    break loop1
                } else {
                    console.log("No Match")
                }
            }
        }
    }
    
    function Render(){
        for (let index = 0; index < symbolsToPrint.length; index++) {
            const symbol = symbolsToPrint[index];
            CreateImgElement(symbol, index)
        }
        render(CompDiv(componentArray))
    }

    function CleanUpComponents(){
        cleanup()
    }

    return(
        <>
            <div>
                <form onSubmit={ handleSubmit }>
                    <input type="text" value={ text.value } onChange = { handleTextChange }/>
                    <button type="submit" className="translate-button">Translate</button>
                </form>    
            </div>
        </>
    )
}

export { RenderDiv }
export default TranslationHandler
/**
 * <button onClick={ CleanUpComponents }>Clear</button>
 */