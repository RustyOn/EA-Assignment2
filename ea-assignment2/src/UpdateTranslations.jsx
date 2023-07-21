import PatchAPI from "./PatchAPI"
import { localTranslations } from "./TranslationHandler"

function UpdateTranslations(){
    //console.log(localTranslations)
    if(localTranslations.length === 0) {
        return
    }else{
        PatchAPI(localTranslations)
    }

    return(
        <></>
    )
}

export default UpdateTranslations