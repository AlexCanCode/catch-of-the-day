import React from 'react';
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};
	addFish = (fish) => {
		//updating state in React 
		//1. Take a copy of the existing state - want to avoid mutating the state object
		const fishes = { ...this.state.fishes };
		//2. Update the copy of the state (uodate fishes)
		fishes[`fish${Date.now()}`] = fish;
		//3. Set the new fishes object to state
		this.setState({
			fishes: fishes //in ES6 could just go ({ fishes })
		})
	};
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
			</div>
		);
	}
}

export default App;