import React from 'react';
import {googleMapsClient} from '../api/googleMaps.js';
import {Meteor} from 'meteor/meteor'; 
import {Orders} from '../api/Orders';

export default class AddressForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: ''
		}
	}
	onSubmit(e){
		e.preventDefault();

		let address = this.refs.address.value;
		
		if(address) {
			this.refs.address.value = '';
			Meteor.call('address.check', address, this.props.order);
			
		}

	}
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" ref="address" placeholder="Введите адрес"/>
					<button>Отправить</button>
				</form>
			</div>
			)
	}
}