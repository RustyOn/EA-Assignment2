import {API_URL, API_KEY} from "./utils.js"

function DeleteAPI(){
    let currID = sessionStorage.getItem("currID")
    fetch(`${API_URL}/${currID}`, {
        method: 'PATCH', 
        headers: {
          'X-API-Key': API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            translations: [] 
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not update translations history')
      }
      return response.json()
    })
    .catch(error => {
    })

    return(
        <>
        </>
    )
}

export default DeleteAPI