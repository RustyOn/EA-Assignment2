import { useState, useEffect } from "react";
import { API_URL } from "./utils.js";
import ProfileItem from "./ProfileItem.jsx";


// Not working properly yet, keeps showing the translations from the first user even when logged in as another user
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

  for (let i = 0; i < jsonData.length; i++) {
    for (let j = 0; j < jsonData[i].translations.length; j++) {
      if (
        currUser === jsonData[i].username &&
        jsonData[i].translations !== null
      ) {
        console.log(jsonData[i].translations[j]);
      }
    }
    return (
      <>
        <p>{jsonData[i].translations}</p>
      </>
    );
  }
}

export default DisplayUser;
