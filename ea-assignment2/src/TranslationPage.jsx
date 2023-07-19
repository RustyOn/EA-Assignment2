////import TranslationInput from "./TranslationInput";
import TranslationOutput from "./CompDiv";
import TranslationHandler from "./TranslationHandler";
import TranslationInput from "./TranslationInput";
import { TranContext} from "./TranContext";
import {useState} from "react"

function TranslationPage(){
    const[locTranslation, setLocTranslation] = useState("")
    return(
        <>
        <TranContext.Provider value={[locTranslation, setLocTranslation]}>
            <TranslationHandler/>
        </TranContext.Provider>
        </>
    )
}

export default TranslationPage