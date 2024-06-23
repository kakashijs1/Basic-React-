import { useState } from "react";
import Menu from "../components/Menu";

function MyDropdown() {
    const [item, setItem] = useState();

    return (
    <>
    <Menu/>
    <div> 
    <div>{item}</div>
    <select onChange={e => setItem(e.target.value)}>
        <option value='01'>AAA</option>
        <option value='02'>BBB</option>
        <option value='03'>CCC</option>
    </select>
    </div>
    </>
    )
}

export default MyDropdown;
