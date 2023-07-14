

function Logout(){
   
    sessionStorage.clear()
    window.location.reload(true)
    
}

function DisplayUser(){
    let currUser = sessionStorage.getItem("currUser")
    if(currUser === null || currUser === ""){
        return <>
        <p>{currUser}</p>
        </>
    }
    return(
        <div>
            <h2 id="displayUser">Welcome {currUser}!</h2>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default DisplayUser