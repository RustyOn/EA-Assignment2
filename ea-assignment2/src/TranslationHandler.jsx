import { cleanup, computeHeadingLevel, render } from "@testing-library/react"
import React, { useState, createElement } from "react"
import ReactDOM from 'react-dom';
const images = require.context('./images', true, /\.(png)$/)
const imageList = images.keys().map(image => images(image))
let translations = []

// TODO: 
// --connect to symbol library--
// --Split words into single symbols--
// --return correct symbols--
// --display symbols correctly on one line--
// needs to clear on page change 
// --add translations to list--


let componentArray = []
function CreateImgElement(symbol, index){
    let noPic = "No picture"
    let component = React.createElement(
        'img',
        { src: symbol, alt: noPic, height: 50, width: 50, id: index },
        null
    )
    //console.log(component);
    componentArray.push(component)
}

function TranslationHandler(){
    const [ text, setText ] = useState({value: ""})
    let textSymbolsArray = []
    let textToTranslate = text.value
    let compareArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let symbolsToPrint = []
    
    
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

        for (let index = 0; index < symbolsToPrint.length; index++) {
            const symbol = symbolsToPrint[index];
            CreateImgElement(symbol, index)
        }

        let compDiv = React.createElement(
            'div',
            { style: {flexDirection: 'row'}, 
            style: {textAlign: 'center'} },
            componentArray
        )
        render(compDiv)
    }

    function CleanUpComponents(){
        cleanup()
    }

    return(
        <>
            <form onSubmit={ handleSubmit }>
                
                <input type="text" value={ text.value } onChange = { handleTextChange }/>
                <button type="submit" >Translate</button>
            </form>
            <button onClick={ CleanUpComponents }>Clear</button>
            <p>
                
            </p>
            <div id="img-holder">
                
            </div>
        </>
    )
}

export default TranslationHandler

/**
     * {imageList.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} />
        ))}

        return(
                        <img key={index} src={img} alt="" />
                    )
     */

 /* for (let index = 0; index < textSymbolsArray.length; index++) {
            const symbol = textSymbolsArray[index];
            for (let index = 0; index < imageList.length; index++) {
                const img = imageList[index];
                //console.log(img.indexOf(symbol, 14))
                if(img.indexOf(symbol, 14) === 14){
                    console.log("match")
                    symbolsToPrint.push(img)
                    console.log(symbolsToPrint)

                }
                else{
                    console.log("no match");
                }
            }
        } */
    
        /* if(imgHolder.hasChildNodes){
            while (imgHolder.lastElementChild) {
                imgHolder.removeChild(imgHolder.lastElementChild);
            }
        } */

        /*textSymbolsArray.forEach(symbol => {
            console.log("looping");
            imageList.forEach(img => {
                //let imgKey = imageList
                console.log(img.indexOf(symbol, 14))
                if(img.indexOf(symbol, 14) === 14){
                    console.log("match")
                    symbolsToPrint.push(img)
                    console.log(symbolsToPrint)
                    break
                }
                else{
                    return
                }
            })


            //TODO: compare symbols to database and add to print
            //loop through to compare?
            //return symbol if match found
            //if no match - ignore? / remove from array
        });*/