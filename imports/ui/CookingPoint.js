import React from 'react';
import Item from './Item';

export default class extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			inventory: [{
				id: 0,
				name: 'item1',
				quantity: 1000
			},{
				id:1,
				name: 'item2',
				quantity: 1000
			},{
				id:2,
				name: 'item3',
				quantity: 1000
			},{
				id:3,
				name: 'item4',
				quantity: 1000
			},{
				id:4,
				name: 'item5',
				quantity: 1000
			},{
				id:5,
				name: 'item6',
				quantity: 1000
			},{
				id:6,
				name: 'item7',
				quantity: 1000
			},{
				id:7,
				name: 'item8',
				quantity: 1000
			},{
				id:8,
				name: 'item9',
				quantity: 1000
			},{
				id:9,
				name: 'item10',
				quantity: 1000
			}]
		}
	}	
	renderStash() {
		return this.state.inventory.map((item) => {
			return 	(
					<Item key={item.id} name={item.name} quantity={item.quantity}/>
					)
		})
	}
	render() {
		return (
			<div>
				<p>{this.props.name}</p>
				{this.renderStash()}				
			</div>
			)
	}
}