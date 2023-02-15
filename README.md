## Mini-burger

![]screen_recording.gif

Mini-burger is a React component that allows you to add a simple minimalistic side menu with an animated hamburger icon to your application.

### Installation

```
npm i mini-burger
```

### Usage

Import the `NavBar` component and add it as the first child of your root element. Add links to the menu by passing them as children of the `NavBar` component:

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from 'mini-burger'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar side='right' bgColor='black' burgerSize={30} hamColorClosed='black' hamColorOpen='white'>
        <a style={{color: 'white'}} href='https://www.google.com'>Link 1</a>
        <a style={{color: 'white'}} href='https://www.google.com'>Link 2</a>
        <a style={{color: 'white'}} href='https://www.google.com'>Link 3</a>
    </NavBar>
    <div style={{margin: "250px"}}>
      <h1 className='mt-10'>Hello there.</h1>
    </div>
  </React.StrictMode>
)
```

Any elements (not just `<a>`) can be passed to the `NavBar`:
```
<NavBar> 
    <MyComponent1 />
    <MyComponent2 />
    <MyComponent3 />
</NavBar>
```

### Customizations

Mini-burger allows you to make some basic customizations via props:

| prop | what it customizes | valid options |
| ---- | ------------- | ------------- |
| side | Which side of the page the menu appears on | 'left','right' |
| bgColor | The background color of the sidebar menu | Any valid css color names |
| burgerSize | The size of the hamburger icon | Any number between 20 and 50 |
| hamColorClosed | The color of the hamburger icon when the menu is closed | Any valid css color names |
| hamColorOpen | The color of the hamburger icon when the menu is open | Any valid css color names | 

Please note that you are responsible for styling the elements that you pass into the `NavBar` as children.

