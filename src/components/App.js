import React from 'react';
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	componentDidMount() {
		const { params } = this.props.match;
		const localStorageRef = localStorage.getItem(params.storeId);
		if(localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) })
		}
		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes'
		});
	} //need to clean up after this to prevent memory leakage - see below: 
	//memory leak: when a program has not returned or properly managed its memory

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	componentDidUpdate(){
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
	}

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

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes })
	}

	addToOrder = (key) => {
		const order = { ...this.state.order };

		order[key] = order[key] + 1 || 1;
		this.setState({ order })
	}

	updateFish = (key, updatedFish) => {
		const fishes = { ...this.state.fishes };

		fishes[key] = updatedFish;

		this.setState({ fishes })
	}

	deleteFish = (key) => {
		const fishes = { ...this.state.fished }

		fishes[key] = null;

		this.setState({ fishes });
	}

	removeFishFromOrder = (key) => {
		const order = { ...this.state.order };

		delete order[key]

		this.setState({ order });
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
					</ul>
				</div>
				<Order 
				fishes={this.state.fishes} 
				order={this.state.order}
				removeFishFromOrder={this.removeFishFromOrder} 
				/>
				<Inventory 
				addFish={this.addFish} 
				loadSampleFishes={this.loadSampleFishes} 
				fishes={this.state.fishes}
				updateFish={this.updateFish}
				 deleteFish={this.deleteFish}
				/>
			</div>
		);
	}
}

export default App;