import React from 'react';

export default class Recipie extends React.Component {
	renderIngs() {
		const ings = ['ing1', 'ing2', 'ing3', 'ing4', 'ing5', 'ing6', 'ing7', 'ing8', 'ing9', 'ing10']
		return ings.map((ing) => {
			if(this.props.ingridients[ing]){				
				return <p>{this.props.ingridients[ing]}</p>
			}
			
		})
	}
	render() {
		
		return (
			<div>
				<p>{this.props.name}</p>
				{this.renderIngs()}
			</div>
			)
	}
}