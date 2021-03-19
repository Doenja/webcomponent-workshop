class LibExample extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: 'open'})

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'lib-example/styles.css');
        shadow.appendChild(linkElem);

        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'wrapper')

        wrapper.style.backgroundColor = "indianred"
        wrapper.style.width = "100px"
        wrapper.style.height = "100px"

        if(this.hasAttribute('size')) {
            wrapper.style.width = this.getAttribute('size')
            wrapper.style.height = this.getAttribute('size')
        }

        if(this.hasAttribute('img')) {
            const img = document.createElement('img')
            img.src=this.getAttribute('img')
            wrapper.appendChild(img)
        }

        this.shadowRoot.append(wrapper)
    }

}

customElements.define('lib-example', LibExample)