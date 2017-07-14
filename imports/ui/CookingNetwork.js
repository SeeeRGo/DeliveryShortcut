import React from 'react';
import CookingPoint from './CookingPoint';

export default class CookingNetwork extends React.Component {
	render() {
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
		return (
			<div>
				<CookingPoint name="Rest A" location={locations[0]}/>
				<CookingPoint name="Rest B" location={locations[1]}/>
				<CookingPoint name="Rest C" location={locations[2]}/>
			</div>
			)
	}
}