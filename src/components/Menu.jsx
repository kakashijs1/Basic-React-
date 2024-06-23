import { Link } from "react-router-dom";

function Menu(){
    return (
        <>
        <Link to ='/'>Home</Link>
        <Link to='/MyInput'>My Input</Link>
        <Link to= '/MyUseEffect'>MyUseEffect</Link>
        <Link to= '/MyDropdown'>Dropdown</Link>
        </>
    )
}

export default Menu;