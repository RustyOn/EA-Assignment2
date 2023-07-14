import { useEffect, useState, useRef } from "react";
import { API_URL } from "./utils";
import PostAPI from "./PostAPI";
import FetchAPI from "./FetchAPI";

function checkUserExist(userName, jsonData) {
  let userExists = false;
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
  //Should the API be fetched every time we press submit?
  //Or do we refresh the data from it in some other way?

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
    const userName = inputRef.current.value;

    if (!checkUserExist(userName, jsonData)) {
      console.log("Does not exist");
      //PostAPI(userName)
      console.log("Added new user");
    } else {
      console.log("Exists");
    }
    sessionStorage.setItem("currUser", userName);
    console.log(sessionStorage.getItem("currUser"));
    //Redirect
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
