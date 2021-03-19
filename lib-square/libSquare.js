class Square extends HTMLElement {
    constructor() {
        super()
    
        // Attatch the shadow dom
        const shadow = this.attachShadow({mode: 'open'})
        
        // Link the stylesheet
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'lib-square/styles.css');
        shadow.appendChild(linkElem);

        // Create a wrapper and give it a class
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class','wrapper');

        wrapper.style.backgroundColor = "indianred"
        wrapper.style.width = "100px"
        wrapper.style.height = "100px"

        // If the size attribute is set, adjust the wrapper style
        if(this.hasAttribute('size')) {
            wrapper.style.width = this.getAttribute('size')
            wrapper.style.height = this.getAttribute('size')
        }

        // If an image is set, create it and add it to the wrapper
        if(this.hasAttribute('img')) {
            const img = document.createElement('img')
            img.src=this.getAttribute('img')
            wrapper.appendChild(img)
        }

        // Add the wrapper to the shadowroot
        this.shadowRoot.append(wrapper)
    }
}

customElements.define('lib-square', Square)

