import { cleanup, render } from "@testing-library/react"
import React, { useState, createElement, useContext } from "react"
import CompDiv from "./CompDiv"
import Input, {  textToExport } from "./TranslationInput"
const images = require.context('./images', true, /\.(png)$/)
const imageList = images.keys().map(image => images(image))
let translations = []
let componentArray = []
let compArray = []
let textToTranslate = "textToExport"
let compareArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let symbolsToPrint = []
let textSymbolsArray = []

function CreateImgElement(symbol, index){
    let noPic = "No picture"
    let component = createElement(
        'img',
        { src: symbol, alt: noPic, height: 50, width: 50, id: index },
        null
    )
    //console.log(component);
    componentArray.push(component)
}

const OnSubmit = () => {
    console.log("this text was entered: " + textToTranslate)
    textSymbolsArray = textToTranslate.split("")
    console.log(textSymbolsArray)

    translations.push(textToTranslate)
    console.log(translations);

    CleanUpComponents()
    checkAndRenderSymbols()
} 

function checkAndRenderSymbols (){
    CleanUpComponents()
    Check()
    Render()
    compArray = CompDiv(componentArray)
    render(compArray)
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
}

function CleanUpComponents(){
    cleanup()
}

function TranslationHandler(){
    //const [ text, setText ] = useState({value: ""})
    

    /* const handleTextChange = event =>{
        setText({ value: event.target.value })
    } */
    return(
        <>  
            <Input/>
        </>
        
    )
}

export { OnSubmit }
export const compArrayEx = compArray
export default TranslationHandler
/**
 * <button onClick={ CleanUpComponents }>Clear</button>
 */