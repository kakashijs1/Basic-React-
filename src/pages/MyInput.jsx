import { useState } from "react";
import Menu from "../components/Menu";


function MyInput() {
    const [message, setMessage ] = useState();

    return (
    <>
    <Menu />
    <div> 
    <input onChange={e => setMessage(e.target.value)}/>
    <div>message = {message} </div>
    </div>
    </>

    )
}

export default MyInput;