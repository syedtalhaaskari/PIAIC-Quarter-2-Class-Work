const rootComponent = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = "<h2>Hello World</h2>";
    return rootElement;
}

document.body.append(rootComponent());