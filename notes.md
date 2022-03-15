* Single Page Applications (SPA)
* React, Angular, View, Ember
* DOM -> Document Object Model
* Every page is parsed into a DOM tree internally
* You can manipulate this DOM tree by writing JS code and using the DOM API(document.xyz)

* As the page design gets complex with a lot of items, DOM tree also grows in size
* Manipulating the DOM tree has an impact on the performance

* Virtual DOM

* React is a Javascript library used to build Front end applications
* from FB
* 17.x
* Mainly used to improve the performance of your single page applications
* Provides a Virtual DOM
* As an application developer you will write JS code to talk to the Virtual DOM and not the real DOM
* Component-based development

### Day 01

* JSX is a special syntax for UI
* XML like strict syntax
* start tag and corresponding end tag; need to have just one root element
* JSX expressions within {}
* Synthetic events onClick, onChange, onFocus; You register the functions
* Each component is an independently running entity which has its own UI, data and behavior
* React SPA is made up of components
* OO approach or Functional approach

### CRA

* sudo npm i -g create-react-app
* sudo create-react-app day02-app --template typescript
* sudo npm start or sudo yarn start

```
[proj]
    package.json

proj> sudo yarn install    
```

### Day 02

* Every component maintains data that is represented as state
* You define a state ie., the properties you want to store; In TS use interface to define the state
* Initialize the state using __this.state__
* You modify the state on UI actions using __this.setState({})__
* State data is bound to UI using JSX expressions __{this.state.xyz}__
* Modifying the state triggers a call to the __render()__ method
* You want to manipulate the UI of the component, manipulate the state of the component


### Day 03

* Accessing input control values using onChange event
* Store the values in a state
* Externalize the logic into a separate class and store its instance in the state
* Component's job is to accept input from the user and delegate the work to other classes
* Every time you call __setState()__ method, virtual DOM is created
* Current Virtual DOM is compared with the previous Virtual DOM for any changes
* If there are any changes, the previous one is discarded and the changes are flushed out to the real DOM tree
* If there are no changes, the current Virtual DOM is discarded

### Day 04

* asynchronous nature of setState()
* If you want to execute something after the state is updated pass it as callback function in the setState() method
* Lifecycle methods of component; __componentDidMount__, __componentDidUpdate__
* You can ignore state updation by overriding __shouldComponentUpdate__ method
* If you want to externalize the states of all the components into a common place, you can use __Redux__

### Day 05
* You pass data into components using attributes __key="value"__
* Access those values as __props__ inside the component
* You define the props
* Access them using __this.props.xyz__
* Props are readonly (atleast in TS world); Doesn't really make sense to change the properties
* If you want two components to talk to each other have a parent(acts like a mediator) component that will contain the two components
* You can pass plain data as props and also function references as props


### Day 06

* __bind__. The event handlers get executed outside the context of the component. 
* You have to bind the method with the component's context
* bind explicitly in a constructor or inline with event handler or use arrow functions
* __React.createRef()__ to bind the reference of an UI element to a variable
* Using the ref you can access the current instance of the UI element and manipulate it
