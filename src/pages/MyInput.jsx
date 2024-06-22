import { useState } from "react";

function MyInput() {
    const [message, setMessage ] = useState();

    return (
    <>
    <input onChange={e => setMessage(e.target.value)}/>
    <div>message = {message} </div>
    </>

    )
}

export default MyInput;