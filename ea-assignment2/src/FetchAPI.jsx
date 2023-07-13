i/*mport { useEffect, useState } from "react";
import { API_URL} from "./utils";
import InputDisplay from "./InputDisplay";


function FetchAPI(){

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        fetch(API_URL)
          .then((response) => response.json())
          .then((json) => {
            setJsonData(json);
          })
          .catch((error) => console.error(error.message));
      }, []);

      return(
        <>{jsonData && jsonData.map(user => <InputDisplay currentUser={user} /> )}</>
      )
}

export default FetchAPI*/
