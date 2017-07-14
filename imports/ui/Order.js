import React from 'react';
import {distance, ingridientConverter, sortNumber} from './MyMath'

export default class Order extends React.Component {
	constructor(props){
		super(props)
		let locations = [{
			lat: 53.505395,
			lng: 49.414414
		}, {
			lat: 53.531434,
			lng: 49.312366
		}, {
			lat: 53.4812139,
			lng: 49.4743925
		}]
		distA = distance(locations[0].lat, this.props.location.lat, locations[0].lng, this.props.location.lng)
		distB = distance(locations[1].lat, this.props.location.lat, locations[1].lng, this.props.location.lng)
		distC = distance(locations[2].lat, this.props.location.lat, locations[2].lng, this.props.location.lng)
		this.state = {
			distA,
			distB,
			distC
		}
	}
	renderAnswer(){
		let sorted = [(this.state.distA*1), (this.state.distB*1), (this.state.distC*1)].sort(sortNumber);
		console.log(sorted);
		let text;
		switch (sorted[0]) {
			case this.state.distA:
			text = <p>Заказ поступил в Rest A</p> 
			break;
			case this.state.distB:
			text = <p>Заказ поступил в Rest B</p>
			break;
			case this.state.distC:
			text = <p>Заказ поступил в Rest C</p>
			break;
			default: 
			text =<p>Something broke</p> 
			break;						
		}
		return text;
	}
	render() {		
		let order = this.props.order;
		let address = this.props.deliveryAddress;
		let ings = ingridientConverter(order)		
		return (
			<div>
				<p>Заказ состоит из {order.dish1} единиц Блюда 1 {order.dish2} единиц Блюда 2 
				и {order.dish3} единиц Блюда 3. На приготовление будет затрачено {ings} ингридиентов.
				Адрес доставки: {address}. Расстояние до Rest A - {this.state.distA} метров до Rest B - {this.state.distB} метров
				до Rest C - {this.state.distC} метров </p>
				{this.renderAnswer()}
			</div>
			)
	}
}