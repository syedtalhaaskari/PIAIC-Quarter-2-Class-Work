import { useState } from "react";

const Header = (props) => { // props are custom properties which are provided by the parent component
    // the process of passing data from parent component to child component is called data binding
    const [state, setState] = useState(0);

    const increment = () => {
        setState(state + 1);
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            {state}
            <br />

            <button onClick={increment}>+</button>
        </div>
    )
}

export default Header;