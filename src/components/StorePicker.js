import React from 'react';

/* JSX Notes
	- Indentation: difficult in JSX because of the return call on the elemens.
		- Best way to have proper indentation is to use () with return 
			- Be careful to have a space after return as to not have return formatted as function
	- Need to use "className" instead of just "class"
	- Cannot return 'sibling' elements
		- render() can only return ONE element
		- Solution as of latest React version --> Wrap it all in <React.Fragment> </React.Fragment>
	- Commenting --> {  }
		- Basically just use javaScript Comments in curly braces
		- must be block level comments // will not work


	CSS in React

	- If you have existing CSS for app
		- Put a link in same file as the mounting point (usually index.html)
		- this app will use this
			- See animation video fro more detail about compiling a SASS filing and using that. 
	- Componentized CSS
		- Import CSS directly into the component
*/ 

class StorePicker extends React.Component {
	render() {
		return (
		<form className="store-selector">
			<h2>Please Enter a Store</h2>
			<input type="text" required placeholder="Store Name" />
			<button type="submit">Visit Store --></button>
		</form>
		)
	}
}

export default StorePicker;