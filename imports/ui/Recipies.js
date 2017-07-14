import React from 'react';
import RecipiesList from './RecipiesList';

export default class Recipies extends React.Component {
	render() {
		let recipies = [{
			name: 'Блюдо 1',
			price: '150 RUB',
			portionSize: 'small',
			ingridients: {
				ing1: 100,
				ing3: 25,
				ing6: 44,
				ing8: 13
			}
		},{
			name: 'Блюдо 2',
			price: '350 RUB',
			portionSize: 'medium',
			ingridients: {
				ing2: 120,
				ing3: 45,
				ing5: 77,
				ing7: 19,
				ing9: 36
			}
		}, {
			name: 'Блюдо 3',
			price: '690 RUB',
			portionSize: 'big',
			ingridients: {
				ing2: 120,
				ing4: 145,
				ing7: 45,
				ing8: 33,
				ing10: 79
			}
		}]
		return (
			<div>
				<RecipiesList recipies={recipies}/>
			</div>
			)
	}
}