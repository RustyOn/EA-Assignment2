

function DisplayUser() {
  let currUser = sessionStorage.getItem("currUser");
  console.log(currUser);
  if (currUser === null || currUser === "") {
    return (
      <>
        <p>{currUser}</p>
      </>
    );
  }
  return (
    <div>
      <h2 id="displayUser">Welcome {currUser}!</h2>
      
    </div>
  );
}

export default DisplayUser;
