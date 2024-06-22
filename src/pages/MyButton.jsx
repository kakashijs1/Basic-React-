import { useState } from "react";

function MyButton() {
    let [x, setX] = useState(0);

    const handleChangeX = () => {
        setX(x + 1);
    }

    return (
        <>
        <div>x= {x} </div>
        <button onClick={handleChangeX}>Click Here</button>
        </>
    )
}

export default MyButton;