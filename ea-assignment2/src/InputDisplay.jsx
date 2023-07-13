import { useEffect, useState, useRef } from "react";
import { API_URL } from "./utils";
import PostAPI from "./PostAPI";

function checkUserExist(username, jsonData){
  if (jsonData !== []) {
    jsonData.map((data) => {
      if (data.username === username) {
        console.log("User exists");
        return true;
      } else {
        
        console.log("User does not exist");
        return false;
      
      }
    });
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
