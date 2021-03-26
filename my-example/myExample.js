class myExample extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        const wrapper = document.createElement('div')

        wrapper.style.backgroundColor = "indianred"
        wrapper.style.width = "100px"
        wrapper.style.height = "100px"  

        if(this.hasAttribute('color')) {
            wrapper.style.backgroundColor = this.getAttribute('color')
        }

        this.shadowRoot.appendChild(wrapper)
    }

}

customElements.define('my-example', myExample)