import React from 'react';
import AddressForm from './AddressForm';
import CookingNetwork from './CookingNetwork';
import OrderList from './OrderList';

export default class Buttons extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			order: {
				dish1: 0,
				dish2: 0,
				dish3: 0,
			}
		}
	}
	renderOrder() {
		return (
			<div>
				Ваш заказ: Блюдо 1 х{this.state.order.dish1}, Блюдо 2 х{this.state.order.dish2}, Блюдо 3 х{this.state.order.dish3} 
			</div>
			)
	}
	render() {
		return(
			<div>
				<button onClick={() => this.setState({
					order: {...this.state.order,
							dish1: this.state.order.dish1 + 1}})
								}>Блюдо 1</button>
				<button onClick={() => this.setState({
					order: {...this.state.order,
							dish2: this.state.order.dish2 + 1}})
								}>Блюдо 2</button>
				<button onClick={() => this.setState({
					order: {...this.state.order,
							dish3: this.state.order.dish3 + 1}})
								}>Блюдо 3</button>
				<button onClick={() => this.setState({order:{dish1: 0, dish2: 0, dish3: 0}})}>Сбросить заказ</button>
				<button>Оформить заказ</button>
				{this.renderOrder()}
				<AddressForm order={this.state.order}/>
				<OrderList/>
				<CookingNetwork/>				
			</div>
			)
	}
}