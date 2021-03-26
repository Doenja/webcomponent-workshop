class myExample extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
            <div id="wrapper">
                <slot></slot>
            </div>
        `
    }

    connectedCallback() {
        const wrapper = this.shadowRoot.querySelector('#wrapper')

        wrapper.style.backgroundColor = "indianred"
        wrapper.style.width = "100px"
        wrapper.style.height = "100px" 

        wrapper.style.display = "flex"
        wrapper.style.justifyContent="center"
        wrapper.style.alignItems="center"

        if(this.hasAttribute('color')) {
            wrapper.style.backgroundColor = this.getAttribute('color')
        }

        if(this.hasAttribute('size')) {
            wrapper.style.width = `${this.getAttribute('size')}px`
            wrapper.style.height = `${this.getAttribute('size')}px`
        }

    }

}

customElements.define('my-example', myExample)