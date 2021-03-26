# Webcomponent Workshop

In this project you will learn how to create webcomponents in vanilla javascript. The webcomponent that you will create is a simple <my-square> custom element that can receive the attributes size and image and adjust itself accordingly.

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

### Step 4 - Add a constructor in your class and call the super method.

```
class MyComponent extends HTMLElement {
  constructor() {
      super()
  }
}
```

### Step 5 - Now we have a custom component in our dom, you can see it when you inspect it. However, your component is not doing anything yet. You want your component to make some changes to the dom after it is connected to the dom. When the component is 'connected' to the dom the connectedCallback is fired. In your component you can make changes after this connecion is done by adding a connectedCallback() function to your class.

### Add a connectedCallback() function and create and append a div to your component.

```
class MyComponent extends HTMLElement {
  constructor() {
      super()
  }

  connectedCallback() {
    const example = document.createElement('div')
    this.appendChild(example)
  }
}
```

### Step 6 - To make your div visible give it some style before you append it.

```
class MyComponent extends HTMLElement {
  constructor() {
      super()
  }

  connectedCallback() {
    const example = document.createElement('div')

    example.style.backgroundColor = "blue"
    example.style.width = "100px"
    example.style.height = "100px"

    this.appendChild(example)
  }
}
```

### Step 7 - You can make your webcomponent respond to html properties. Give your component an html property.

```
<my-component color="red"></my-component>
```

### Step 8 - You can check for attributes with the hasAttribute method and you can get attribute values with the getAttribute method. Add an if statement that changes the component when the property is set.

```
class MyComponent extends HTMLElement {
  constructor() {
      super()
  }

  connectedCallback() {
    const example = document.createElement('div')

    example.style.backgroundColor = "blue"
    example.style.width = "100px"
    example.style.height = "100px"

    if(this.hasAttribute('color')) {
        wrapper.style.backgroundColor = this.getAttribute('color')
    }

    this.appendChild(example)
  }
}
```
