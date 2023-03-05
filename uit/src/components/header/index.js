import { useState } from "react";

const Header = (props) => { // props are custom properties which are provided by the parent component
    // the process of passing data from parent component to child component is called data binding
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const inputChange = (e) => {
        // This function runs everytime when input box's value change
        setInput(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault(); // This prevents the default behaviour of form element which causes the page to refresh
        // let arr = todos;
        // arr.push(input);
        // setTodos(arr);
        setTodos([...todos, input]);
        setInput("");
    }

    const isDelete = e => {
        // console.log(e)
        // let arr = todos;
        // arr.splice(e, 1);
        // setTodos([...arr]);
        setTodos(todos.filter((todo, ind) => ind !== e ));
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                    value={input}
                    onChange={inputChange}
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {/* {todos.map((todo, ind) => {
                    return <li key={ind}>
                        {todo}
                    </li>
                })} */}
                {todos.map((todo, ind) => <li key={ind}>
                    {todo}
                    <button onClick={isDelete.bind(null, ind)}>Delete</button>
                </li>)}
            </ul>

        </div>
    )
}

export default Header;