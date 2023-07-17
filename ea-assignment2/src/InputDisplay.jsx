import { useEffect, useState, useRef } from "react";
import { API_URL } from "./utils";
import { useNavigate } from "react-router-dom";
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
  //Should the API be fetched every time we press submit?
  //Or do we refresh the data from it in some other way?
  let currUser = sessionStorage.getItem("currUser");

  useEffect(() => {
    if (currUser) {
      navigate("/translations");
    }
  }, []);

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
    event.preventDefault();
    if (!jsonData) return;
    let userName = inputRef.current.value;

    if(userName === ''){
      console.log("Input is empty")
    }else{
      if (checkUserExist(userName, jsonData === false)) {
        console.log("Does not exist");
        //PostAPI(userName)
        console.log("Added new user");
        sessionStorage.setItem("currUser", userName);
        navigate("/translation");
      } else {
        console.log("Exists");
        sessionStorage.setItem("currUser", userName);
        navigate("/translation");
      }
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
