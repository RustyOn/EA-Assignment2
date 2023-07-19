import PatchAPI from "./PatchAPI"
import { localTranslations } from "./TranslationHandler"




function UpdateTranslations(){
    PatchAPI(localTranslations)

    return(
        <></>
    )
}

export default UpdateTranslations