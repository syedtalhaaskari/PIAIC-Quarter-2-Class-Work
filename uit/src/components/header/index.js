import { useState } from "react";

const Header = (props) => { // props are custom properties which are provided by the parent component
    // the process of passing data from parent component to child component is called data binding
    const [input, setInput] = useState("");

    const inputChange = (e) => {
        // This function runs everytime when input box's value change
        setInput(e.target.value);
    }

    return (
        <div>
            <input
                value={input}
                onChange={inputChange}
            />
        </div>
    )
}

export default Header;