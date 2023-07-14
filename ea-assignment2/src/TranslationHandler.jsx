import { render } from "@testing-library/react"
import React, { useState, createElement } from "react"
import ReactDOM from 'react-dom';
const images = require.context('./images', true, /\.(png)$/)
const imageList = images.keys().map(image => images(image))

// TODO: 
// --connect to symbol library--
// --Split words into single symbols--
// return correct symbols
//const imgHolder = document.getElementById("img-holder")
//const root = ReactDOM.createRoot(imgHolder);

function CreateImgElement(symbol){
    console.log(symbol)
    var component = React.createElement(
        'img',
        {src: {symbol}, alt: "no pic"},
        null
    )
    console.log(component)
    render(component)
}

function TranslationHandler(){
    const [ text, setText ] = useState({value: ""})
    let textSymbolsArray = []
    let textToTranslate = text.value

    const handleTextChange = event =>{
        setText({ value: event.target.value })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        console.log("this text was entered: " + text.value)
        textSymbolsArray = textToTranslate.split("")
        console.log(textSymbolsArray)

        checkSymbols()
    }

    let compareArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
    let symbolsToPrint = []
    function checkSymbols (){
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
                    //console.log(img)
                } else {
                    console.log("No Match")
                }
            }
        }

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
        console.log(symbolsToPrint.length)
        console.log(symbolsToPrint)


        for (let index = 0; index < symbolsToPrint.length; index++) {
            const symbol = symbolsToPrint[index];
            CreateImgElement(symbol)

            //console.log("symbol: " + symbol)
            //console.log("Trying to render images")
            /* const newSymbolImg = document.createElement("img")
            newSymbolImg.src = symbol
            newSymbolImg.height = 50
            newSymbolImg.width = 50 
            console.log(newSymbolImg)
            console.log(symbol) 
            imgHolder.appendChild(newSymbolImg) */
            //document.getElementById("img-id").src = symbol
            //symbolImg(symbol)
        }

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
        
    }



    /**
     * {imageList.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} />
        ))}

        return(
                        <img key={index} src={img} alt="" />
                    )
     */
    return(
        <>
            <form onSubmit={ handleSubmit }>
                <fieldset>
                    <input type="text" value={ text.value } onChange = { handleTextChange }/>
                    <button type="submit" >Translate</button>
                </fieldset>
            </form>
            <p>
                Text translation
            </p>
            <div id="img-holder">
                
                
            </div>
        </>
        
    )
}

export default TranslationHandler