import { useState } from "react";

const Header = () => {
    const [state] = useState(0);

    return (
        <div>
            {state}
        </div>
    )
}

export default Header;