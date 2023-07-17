import {useState, useEffect} from "react"
import {API_URL} from "./utils.js"

function DisplayUser() {
  let currUser = sessionStorage.getItem("currUser");
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        setJsonData(json);
      })
      .catch((error) => console.error(error.message));
  }, []);

  for(let i = 0; i < jsonData.length; i++){
    if(currUser === jsonData[i].username){
        return(
            <p>{jsonData[i].translations}</p>
        )
    }else{
        return(
            <p>No translations found</p>
        )
    }

  }

}

export default DisplayUser;
