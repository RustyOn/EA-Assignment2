import { useEffect, useState } from "react"
import {API_URL} from "./utils"

function InputDisplay() {

  const [jsonData, setJsonData] = useState([]) 

  useEffect(() =>{
    fetch(API_URL)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setJsonData(json)
    })
    .catch(error => console.error(error.message))
  }, [])

    function handleSubmit(e){
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)

        if(!jsonData)
          return
        if(jsonData){
          jsonData.map(data =>
            {if(data.username === formJson.userName){
              return console.log("User exists")
            }
            return console.log("Does not exist")
          }
            )
        }
    }


  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Username: <input name="userName" />
        </label>

        <button type="submit">Login</button>
      </form>

      {jsonData && jsonData.map(data => <h3 key={data.id}>{data.username}</h3>)}
    </>
  );
}

export default InputDisplay;
