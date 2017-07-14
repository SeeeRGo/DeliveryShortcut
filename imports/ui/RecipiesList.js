import React from 'react';
import Recipie from './Recipie';

export default class RecipiesList extends React.Component {
	renderRecipies(){
		return this.props.recipies.map((recipie) => {
			return <Recipie name={recipie.name} ingridients={recipie.ingridients}/>
		})
	}
	render() {
		return (
			<div>
				<p>Recipies List here</p>
				<div>{this.renderRecipies()}</div>
			</div>
			)
	}
}