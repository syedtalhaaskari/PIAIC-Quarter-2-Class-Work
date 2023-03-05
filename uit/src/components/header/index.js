import { useState } from "react";

const Header = (props) => { // props are custom properties which are provided by the parent component
    // the process of passing data from parent component to child component is called data binding
    const [input, setInput] = useState("Talha");

    return (
        <div>
            <input value={input} />
        </div>
    )
}

export default Header;