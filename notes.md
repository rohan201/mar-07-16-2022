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



