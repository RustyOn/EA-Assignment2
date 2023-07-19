import { useState, useEffect } from "react";
import { API_URL } from "./utils.js";
import ProfileItem from "./ProfileItem.jsx";
import DeleteAPI from "./DeleteAPI.jsx";

function DeleteTrans() {
  //DeleteAPI()
}

function DisplayUser() {
  let currUser = sessionStorage.getItem("currUser");
  const [jsonData, setJsonData] = useState([]);
  let runOnce = false;
  useEffect(() => {
    if (!runOnce) {
      fetch(API_URL)
        .then((response) => response.json())
        .then((json) => {
          setJsonData(json);
        })
        .catch((error) => console.error(error.message));
      runOnce = true;
    }
  }, []);

  for (let i = 0; i < jsonData.length; i++) {
    if (
      currUser === jsonData[i].username &&
      jsonData[i].translations !== null
    ) {
      //Key of the element is the array index from map - not the best solution but it gets the job done for now
      const listTrans = jsonData[i].translations
        .toReversed()
        .map((translation, index) =>
          index < 10 ? <li key={index}>{translation}</li> : null
        );
      return (
        <>
          <ul>
            UserID: {sessionStorage.getItem("currID")}
            {listTrans}
          </ul>
          <button className="orange-btn" onClick={DeleteTrans}>Clear Record</button>
        </>
      );
    }
  }
}

export default DisplayUser;
