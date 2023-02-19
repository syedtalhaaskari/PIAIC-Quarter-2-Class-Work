import "./style.css";
import { Greetings } from "./components/Greetings";

const rootComponent = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `${Greetings()}`;
    return rootElement;
}

document.body.append(rootComponent());