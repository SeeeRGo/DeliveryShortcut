import React from 'react';
import {Orders} from '../api/Orders';
import Order from './Order';
import {Tracker} from 'meteor/tracker';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: []
		}
	}
	renderOrders() {		
		return this.state.orders.map((order) => {
			return <Order status={order.status} location={order.location} 
						deliveryAddress={order.deliveryAddress} order={order.order} 
						cookingPoint={order.cookingPoint} />
		})
	}
	componentDidMount() {		
		this.linksTracker = Tracker.autorun(() => {
			Meteor.subscribe('linksPub');
			const orders = Orders.find({status: 'awaiting placement'}).fetch();
			this.setState({orders});
		})
	}
	componentWillUnmount() {
		this.linksTracker.stop();
	}
	render() {
		return (
			<div>
				{this.renderOrders()}
			</div>
			)
	}
}