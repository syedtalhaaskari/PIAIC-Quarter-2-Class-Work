import { useState } from "react";

const Header = (props) => { // props are custom properties which are provided by the parent component
    // the process of passing data from parent component to child component is called data binding
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const inputChange = (e) => {
        // This function runs everytime when input box's value change
        setInput(e.target.value);
    }

    const addTodo = () => {
        // let arr = todos;
        // arr.push(input);
        // setTodos(arr);
        setTodos([...todos, input]);
        setInput("");
    }

    return (
        <div>
            <input
                value={input}
                onChange={inputChange}
            />
            <button onClick={addTodo}>Add</button>

            <h5>{input}</h5>
        </div>
    )
}

export default Header;