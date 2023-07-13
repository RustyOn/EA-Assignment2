import { API_KEY, API_URL } from "./utils"

function PostAPI(username){


    fetch(API_URL, {
        method: "POST",
        headers: {
          "X-API-Key": API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          translations: [],
        }),
      });
    return(
        <>
        </>
    )
}

export default PostAPI