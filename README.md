# Webcomponent Workshop

In this project you will learn how to create webcomponents in vanilla javascript. The webcomponent that you will create is a simple custom element that can receive the attributes and adjust itself accordingly.

## Creating a webcomponent

1. Create a class that will define your webcomponent

```
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>`;
  }
}
```

2. Register your new custom element, after your class, using the CustomElementRegistry.define() method

```
...
customElements.define('my-component', MyComponent);
```

3. Add your new webcomponent in your html file

```
<my-component></my-component>
```

4. Add a constructor in your class and call the super method.

```
class MyComponent extends HTMLElement {
  constructor() {
      super()
  }
}
```

5. Now we have a custom component in our dom, you can see it when you inspect it. However, your component is not doing anything yet. You want your component to make some changes to the dom after it is connected to the dom. When the component is 'connected' to the dom the connectedCallback is fired. In your component you can make changes after this connecion is done by adding a connectedCallback() function to your class. Add a connectedCallback() function and create and append a div to your component.

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

6. To make your div visible give it some style before you append it.

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

7. You can make your webcomponent respond to html properties. Give your component an html property.

```
<my-component color="red"></my-component>
```

8. You can check for attributes with the hasAttribute method and you can get attribute values with the getAttribute method. Add an if statement that changes the component when the property is set.

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

## Attaching the shadow dom

Your webcomponent now lives in the dom. This means that your webcomponent can be influenced, for example, by global css files. In order to avoid this webcomponents can create their own dom, a shadow dom. This shadow dom hides and separates the custom components code from the rest of the page. It can also be queried and manipulated like a normal dom from inside your component.

1. In your constructor, attach a shadow dom

```
class MyComponent extends HTMLElement {
  constructor() {
      super()
      this.attachShadowDom({ mode: 'open' })
  }

  ...
}
```

2. If you look in your browser the children of your component are not rendering anymore. When you inspect your element you can see that a shadowroot is added to your component. The children do not render anymore because they were appended to the component. Attach them to the shadowRoot instead.

```
  this.shadowRoot.appendChild(example)
```

## Using HTML templates

Instead of appending the children to your component you can also use an html template. This html template makes use of the property innerHtml, which can be used to get or set the html markup within an element.

1. In your constructor add some inner html to your shadowRoot. Now you can remove the appendChild from your connected callback and select your innerHTML via querySelectors.

```
class myExample extends HTMLElement {
    constructor() {
        ...
        this.shadowRoot.innerHTML = `
            <div id="example"></div>
        `
    }

    connectedCallback() {
        const example = this.shadowRoot.querySelector('#example')

        ...

        ~~this.shadowRoot.appendChild(example)~~
    }

}
```

The html templates also allow you to add text between your custom tags and display them in your custom component. For this you use a slot. You can also render other html or even other webcomponents in your custom component.

2. Add some html in between your custom html tags

```
<my-component color="red">
  <span>Hello world!</span>
</my-component>
```

3. Add a slot in your html template to display the content between your custom brackets

```
  this.shadowRoot.innerHTML = `
      <div id="example">
        <slot></slot>
      </div>
  `
```

4. You can also add a default value to your slot

```
  <slot>default value</slot>
```
