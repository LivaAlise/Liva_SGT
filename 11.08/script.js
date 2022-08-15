function addElement() {
    const container = document.getElementByClassName("container")[0];
    const element = document.createElement("hi");
    element.textContent = "Element added";
    container.appendChild(element);
}