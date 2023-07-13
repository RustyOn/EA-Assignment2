function InputDisplay() {

    function handleSubmit(e){
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)
    }

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Username: <input name="userName" />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default InputDisplay;
