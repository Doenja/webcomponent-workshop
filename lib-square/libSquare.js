class Square extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `<h1>Hello world</h1>`;
    }
}


