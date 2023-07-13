import { useEffect, useState, useRef } from "react";
import { API_URL } from "./utils";
import PostAPI from "./PostAPI";

function checkUserExist(userName, jsonData){
  let userExists = false
  if (jsonData !== []) {
    console.log(jsonData[1].username)
    console.log(userName)
    for(let i = 0; i < jsonData.length; i++){
      if(jsonData[i].username === userName){
        userExists = true
      }else{
        userExists = false
      }
    }
    console.log(userExists)
    return userExists
  }
}

function InputDisplay() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        setJsonData(json);
      })
      .catch((error) => console.error(error.message));
  }, []);

  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!jsonData) return;
      const userName = inputRef.current.value;
    if(checkUserExist(userName, jsonData)){
      return console.log("Success")
    }else{
      return console.log("Fail")
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input type="text" ref={inputRef} />
        </label>

        <button type="submit">Login </button>
      </form>
    </>
  );
}

export default InputDisplay;
