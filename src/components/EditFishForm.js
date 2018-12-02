import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
	static propTypes = {
		deleteFish: PropTypes.func,
		fish: PropTypes.shape({
			desc: PropTypes.string,
			image: PropTypes.string,
			name: PropTypes.string,
			status: PropTypes.string,
			price: PropTypes.number
		}),
		updatedFish: PropTypes.func
	}

	handleChange = (e) => {
		//update that fish
		//1. take a copy of the current fish
		const updatedFish = { 
		...this.props.fish,
		[e.currentTarget.name]: e.currentTarget.value 
		};

		this.props.updateFish(this.props.index, updatedFish);

	};

	handleDelete = (e) => {
		this.props.deleteFish(this.props.index);
	}
	render() {
		return (
			<div className="fish-edit">
				<input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}   />
				<input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price}  />
				<select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status} >
					<option value="available">Fresh!</option>
					<option value="unavailbe">Sold Out</option>
				</select>
				<textarea type="text" name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
				<input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
			<button onClick={this.handleDelete}>Remove Fish</button>
			</div>
		)
	}
}

export default EditFishForm;