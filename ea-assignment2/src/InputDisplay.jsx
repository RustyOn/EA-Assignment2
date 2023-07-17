import { useEffect, useState, useRef } from "react";
import { API_URL } from "./utils";
import { json, useNavigate } from "react-router-dom";
import PostAPI from "./PostAPI";
import FetchAPI from "./FetchAPI";

function checkUserExist(userName, jsonData) {
  let userExists = false;
  
  if(userName === "" || userName === null) return (userExists = false)
  
  if (jsonData !== []) {
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].username === userName) {
        return (userExists = true);
      } else {
        userExists = false;
      }
    }
    return userExists;
  }
}

function InputDisplay() {
  const [jsonData, setJsonData] = useState([]);
  const navigate = useNavigate();
  let currUser = sessionStorage.getItem("currUser");
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        setJsonData(json);
      })
      .catch((error) => console.error(error.message));
  }, []);

  useEffect(() => {
    if (currUser) {
      navigate("/translations");
    }
  }, []);

  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!jsonData) return;
    let userName = inputRef.current.value;
    sessionStorage.setItem("currUser", userName);

    if(userName === ''){
      console.log("Input is empty")
    }else{
      if (checkUserExist(userName, jsonData) === false) {
        console.log("Does not exist");
        //PostAPI(userName)
        console.log("Added new user");
       
      } else {
        console.log("Exists");

      }
      navigate("/translation");
    }
  }
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
