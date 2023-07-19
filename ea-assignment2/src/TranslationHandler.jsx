import React, { useState, createElement, useEffect } from "react"
import { API_URL } from "./utils";
import PatchAPI from "./PatchAPI"
const images = require.context('./images', true, /\.(png)$/)
const imageList = images.keys().map(image => images(image))
let translations = []
let localTranslations = []
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

function TranslationHandler(){
    const [ text, setText ] = useState({value: ""})
    let textToTranslate = text.value
    let compareArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let symbolsToPrint = []
    let textSymbolsArray = []
    const [jsonData, setJsonData] = useState([]);
    let currID = sessionStorage.getItem("currID")

    useEffect(() => {
        fetch(API_URL)
          .then((response) => response.json())
          .then((json) => {
            setJsonData(json);
          })
          .catch((error) => console.error(error.message));
    }, []);

    
    function fetchJson(){
        for (let i = 1; i < jsonData.length; i++) {
            if(currID = jsonData[i].id){
                return translations = jsonData[i].translations
                //console.log(translations)
            }
        }
    }
    
    
    const handleTextChange = event =>{
        setText({ value: event.target.value })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        if(text.value !== ""){
            localTranslations = []
            textSymbolsArray = textToTranslate.split("")
            checkAndRenderSymbols()
            localTranslations.push(text.value)
            fetchJson()

            console.log(localTranslations);
            console.log(translations)
            let sendTranslations =[...localTranslations, ...translations]
            console.log(sendTranslations);

            PatchAPI(sendTranslations)
            setText({value: ""})
        }
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

export default TranslationHandler
/**
 * <button onClick={ CleanUpComponents }>Clear</button>
 */