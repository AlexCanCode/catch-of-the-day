import React from 'react'; //Go into the node_modules folder and import react
import { render } from 'react-dom'; //Required to render to DOM -- we only need the render method 
import StorePicker from './components/StorePicker';
import App from './components/App';
import "./css/style.css"; //webpack can understand that this is css and will hot reload when it detects changes 

//All classes in react need at least 1 method in it --> render()



render(<App />, document.querySelector('#main'));