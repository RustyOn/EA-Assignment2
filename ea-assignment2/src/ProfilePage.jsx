import { useEffect } from "react"
import DisplayUser from "./DisplayUser"
import UpdateTranslations from "./UpdateTranslations"

function ProfilePage(){

    
    return(
        <>
            <UpdateTranslations/>
            <DisplayUser/>
        </>
    )
}

export default ProfilePage