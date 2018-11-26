import React from 'react'; //Go into the node_modules folder and import react
import { render } from 'react-dom'; //Required to render to DOM -- we only need the render method 
import App from './components/App';
import "./css/style.css"; //webpack can understand that this is css and will hot reload when it detects changes 
import Router from './components/Router'



render(<Router />, document.querySelector('#main'));