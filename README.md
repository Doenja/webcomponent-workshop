# Webcomponent Workshop

In this project you will learn how to create webcomponents in vanilla javascript. The webcomponent that you will create is a simple <lib-square> custom element that can receive the attributes size and image and adjust itself accordingly. 

### Step 1 - Create a class that will define your webcomponent
```
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>`;
  }
}
```
### Step 2 - Register your new custom element, after your class, using the CustomElementRegistry.define() method
```
...
customElements.define('my-component', MyComponent);
```

### Step 3 - Add your new webcomponent in your html file
```
<my-component></my-component>
```

### Step 4 - Add a constructor in your class and add a shadowdom, using Element.attachShadow() method
```
class MyComponent extends HTMLElement {
  constructor() {
      super()
      const shadow = this.attachShadow({mode: 'open'})
  }
}
```

### Step 5 - Create a div element called wrapper and add it to the shadowdom. Add the attribute class="wrapper"
```
...
constructor() {
    ...
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class','wrapper');
}
```

### Step 6 - Add styles to the wrapper and attach it to the shadow dom so that you can see it.
```
...
  constructor() {
      ...

      wrapper.style.backgroundColor = "indianred"
      wrapper.style.width = "100px"
      wrapper.style.height = "100px"

      this.shadowRoot.append(wrapper)
  }
```

### Step 7 - Create a link element, set it to relation stylesheet and href to the stylesheet
```
...
constructor() {
    ...

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'lib-example/styles.css');
    shadow.appendChild(linkElem);
}
```

### Step 8 - In your html, set a size attribute
```
<lib-example size="300px"></lib-example>
```

### Step 9 - In your constructor, if the color attribute is set use it as the background color
```
if(this.hasAttribute('size')) {
    wrapper.style.width = this.getAttribute('size')
    wrapper.style.height = this.getAttribute('size')
}
```

### Step 10 - In your html, add another of your components and set the an img tag
```
<lib-example size="300px" img="img/colors.jpeg"></lib-example>
```

### Step 11 - If an image attribute is set, create an image with that src and append it to the wrapper
```
if(this.hasAttribute('img')) {
    const img = document.createElement('img')
    img.src = this.hasAttribute('img') ? this.getAttribute('img') : 'img/colors.jpeg'
    wrapper.appendChild(img)
}
```
