import { useEffect, useState, useRef } from "react";
import { API_URL } from "./utils";
import { useNavigate } from "react-router-dom";
import PostAPI from "./PostAPI";

//checks if a user exists in the supplied JSON data
  //If a user exists save their array index as a user ID and break out of the function
  //If a user does not exist continue iterating through the data, finally return false if they do not exist at all
  //This could very well be put into a separate component
function checkUserExist(userName, jsonData) {
  let userExists = false;
  if(userName === "" || userName === null) return (userExists = false)
  if (jsonData !== []) {
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].username === userName) {
        sessionStorage.setItem("currID", i + 1)
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
  //Fetching the API and storing it in a useState
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        setJsonData(json);
      })
      .catch((error) => console.error(error.message));
  }, []);

  //As soon as this component renders check if there is a currUser, if yes go straight to Translation Page
  useEffect(() => {
    if (currUser) {
      navigate("/translations");
    }
  }, []);

  //Using useRef to not update the input every time the user enters a value, instead the input is set on submit
  const inputRef = useRef();

  //On submitting the form check if jsonData is empty and return if that is true
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!jsonData) return;
    let userName = inputRef.current.value;
    //Sets the inputted username to the session storage
    sessionStorage.setItem("currUser", userName);

    //Guards against an empty input (This is not needed anymore as we've made the input field required) 
    if(userName === ''){
      console.log("Input is empty")
    }else{
      if (checkUserExist(userName, jsonData) === false) {
        //If user does not exist then a new user will be created
        console.log("Does not exist");
        //PostAPI(userName) !!!!!!!!!!!
        console.log("Added new user");
       
      } else {
        //Nothing special happens if a user does exist
        console.log("Exists");

      }
      //Whichever the case always navigates to the Translation Page
      navigate("/translation");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a username: <input required type="text" ref={inputRef} />
        </label>

        <button className="orange-btn" type="submit">Login </button>
      </form>
    </>
  );
}

export default InputDisplay;
