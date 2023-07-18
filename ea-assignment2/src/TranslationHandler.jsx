import { cleanup, render } from "@testing-library/react"
import React, { useState, createElement } from "react"
import CompDiv from "./CompDiv"
import Input, { countExport, textExport } from "./TranslationInput"
const images = require.context('./images', true, /\.(png)$/)
const imageList = images.keys().map(image => images(image))
let translations = []
let componentArray = []
let compArray = []

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

function TranslationHandler(){
    const [ text, setText ] = useState({value: ""})
    let textToTranslate = textExport
    let compareArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let symbolsToPrint = []
    let textSymbolsArray = []

    const handleTextChange = event =>{
        setText({ value: event.target.value })
    }

    // fix this. check if button is clicked and then run 
    // but ovs dont do it like this
    if(countExport > 0){
        console.log("this text was entered: " + textToTranslate)
        textSymbolsArray = textToTranslate.split("")
        console.log(textSymbolsArray)

        translations.push(textToTranslate)
        console.log(translations);

        CleanUpComponents()
        checkAndRenderSymbols()
        compArray = CompDiv(componentArray)
    }  

    function checkAndRenderSymbols (){
        CleanUpComponents()
        Check()
        Render()
        compArray = CompDiv(componentArray)
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

    return(
        <>  
            <Input/>
        </>
        
    )
}

export const compArrayEx = compArray
export default TranslationHandler
/**
 * <button onClick={ CleanUpComponents }>Clear</button>
 */