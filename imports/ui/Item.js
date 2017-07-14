import React from 'react';

export default class Item extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			quantity: this.props.quantity
		}
	}
	render() {
		return (
			<div>
				Запас {this.props.name} составляет {this.state.quantity} единиц
				<button onClick={() => {
					this.setState({quantity: (this.state.quantity+100)})}
				}>Пополнить</button>
			</div>
			)
	}
}