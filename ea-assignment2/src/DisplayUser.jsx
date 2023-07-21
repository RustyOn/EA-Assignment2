import { useState, useEffect } from "react";
import { API_URL } from "./utils.js";

import DeleteAPI from "./DeleteAPI.jsx";

function DisplayUser() {
  let currUser = sessionStorage.getItem("currUser");
  const [jsonData, setJsonData] = useState([]);
  //Fetching the API and storing the data in a useState
  //We've had the useEffect trigger twice for some reason, possible re-render from further up?
  //Never found the actual cause
  //runOnce makes sure that it fetches the data only once
  useEffect(() => {
    
      fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        setJsonData(json);
      })
      .catch((error) => console.error(error.message));
  }, []);
  

  //Iterating through the JSON data
  for (let i = 0; i < jsonData.length; i++) {
    //Finding the data of the current user and checking if they have any translations
    if (
      currUser === jsonData[i].username &&
      jsonData[i].translations !== null
    ) {
      //Iterating through the translations with the map hof, creating a list element with latest 10 translations
      //Key of the element is the array index from map - not the best solution but it gets the job done for now
      //Reversing the translations to start from the latest index. Helps when getting the latest 10 translations
      
     /* setListData(jsonData[i].translations
        .toReversed()
        .map((translation, index) =>
          index < 10 ? <li key={index}>{translation}</li> : null
        ))
      */
        const listTrans = jsonData[i].translations
        .toReversed()
        .map((translation, index) =>
          index < 10 ? <li key={index}>{translation}</li> : null
        )

        //setListData(listTrans)

      function DeleteTrans() {
        DeleteAPI() 
        setJsonData([])
      }
      return (
        <>
          <ul className="profile-list">{listTrans}</ul>
          <button className="orange-btn" onClick={DeleteTrans}>
            Clear Record
          </button>
        </>
      );
    }
  }
}

export default DisplayUser;
