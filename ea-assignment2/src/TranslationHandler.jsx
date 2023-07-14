import { useState } from "react"
const images = require.context('./images', true, /\.(png)$/)
const imageList = images.keys().map(image => images(image))

// TODO: 
// --connect to symbol library--
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
    
    //console.log(imageList)
    let textToTranslate = text.value
    
    ///static/media/a 
    let symbolsToPrint = []
    const checkSymbols = event => {
        symbolsToPrint = []
        textSymbolsArray.forEach(symbol => {
            console.log("looping");
            imageList.forEach(img => {
                //let imgKey = imageList
                console.log(img.indexOf(symbol, 14))
                if(img.indexOf(symbol, 14) === 14){
                    console.log("match")
                    symbolsToPrint.push(img)
                    console.log(symbolsToPrint)
                }
                else{
                    return
                }
                //if img.name contains symbol  
                //symbolsToPrint.push (img)
                //else - return
            })


            //TODO: compare symbols to database and add to print
            //loop through to compare?
            //return symbol if match found
            //if no match - ignore? / remove from array
        });
    }
  
    /**
     * {imageList.map((image, index) => (
                    <img key={index} src={image} alt={`image-${index}`} />
                ))}
     */
    return(
        <>
            <form onSubmit={ handleSubmit }>
                <fieldset>
                    <input type="text" value={ text.value } onChange= { handleTextChange }/>
                    <button type="submit" onClick ={checkSymbols}>Translate</button>
                </fieldset>
            </form>
            <p>
                Text translation
            </p>
            <div>
                
            </div>
        </>
        
    )
}

export default TranslationHandler