import React from 'react';

class AddFishForm extends React.Component {
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();
	createFish = (e) => {
		//1. Stop the form from submitting
		e.preventDefault();
		//2. get values from inputs - using Refs - use to create fish obj.
		const fish = {
			name: this.nameRef.current.value,
			price: parseFloat(this.priceRef.current.value), //This needs validation incase it isnt a number - parseFloat(string) = null
			status: this.statusRef.current.value,
			desc: this.descRef.current.value,
			image: this.imageRef.current.value
		}
		//3. Data needs to live in the App component (at the highest level) so it can be shared between components. 
		this.props.addFish(fish);
		//Refresh the form
		e.currentTarget.reset();
	}
	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input name="name" ref={this.nameRef} type="text"  placeholder="Name"/>
				<input name="price" ref={this.priceRef} type="text"  placeholder="Price"/>
				<select name="status" ref={this.statusRef}>
					<option value="available">Fresh!</option>
					<option value="unavailbe">Sold Out</option>
				</select>
				<input name="desc" ref={this.descRef} type="text"  placeholder="Desc"/>
				<textarea name="image" ref={this.imageRef} placeholder="Image"></textarea>
				<button type="submit">+ Add Fish</button>
			</form>
		);
	}
}

export default AddFishForm;