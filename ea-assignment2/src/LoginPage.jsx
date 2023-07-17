import { useEffect } from "react"
import InputDisplay from "./InputDisplay"
import {useNavigate} from "react-router-dom"


function LoginPage(){
    const navigate = useNavigate()
    let currUser = sessionStorage.getItem("currUser")
    console.log(currUser)

    useEffect(() => {
        if(currUser === null || currUser === ""){
            navigate("/")
        }else{
            navigate("/translation")
        }
    }, [])


    
        return(
            <>
            <InputDisplay />
            </>
        )

       
    
}

export default LoginPage