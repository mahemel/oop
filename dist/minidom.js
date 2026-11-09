class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    type;
    placeholder;
    className;
    constructor(id, type, placeholder, className) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
        this.className = className;
    }
    render() {
        return `<input class="${this.className}" id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}"/>`;
    }
}
class Button extends UIElement {
    text;
    className;
    type;
    constructor(id, text, className, type) {
        super(id);
        this.text = text;
        this.className = className;
        this.type = type;
    }
    render() {
        return `<button type="${this.type}" class="${this.className}" id="${this.id}">${this.text}</button>`;
    }
}
class Form extends UIElement {
    // constructor(id: string) {
    //     super(id);
    // } optional constructor can be omitted if it only calls the parent constructor
    children = [];
    appendChild(child) {
        this.children.push(child);
    }
    render() {
        const childNodes = this.children
            .map((child) => child.render())
            .join("\n");
        return `<form id="${this.id}">${childNodes}</form>`;
    }
}
const formElement = new Form("loginForm");
const emailInput = new Input("email", "email", "Enter your email", "form-control");
const passwordInput = new Input("password", "password", "Enter your password", "form-control");
const button = new Button("button", "Submit", "btn btn-primary", "button");
formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(button);
// console.log(emailInput.render());
// console.log(passwordInput.render());
// console.log(button.render());
console.log(formElement.render());
const root = document.getElementById("root");
if (root) {
    root.innerHTML = formElement.render();
}
export {};
