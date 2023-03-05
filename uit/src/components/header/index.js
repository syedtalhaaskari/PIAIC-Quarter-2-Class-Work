import { useState } from "react";

const Header = () => {
    const [state, setState] = useState(0);

    const increment = () => {
        setState(state + 1);
    }

    return (
        <div>
            {state}
            <br />

            <button onClick={increment}>+</button>
        </div>
    )
}

export default Header;