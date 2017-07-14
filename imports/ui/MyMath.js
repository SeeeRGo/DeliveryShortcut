import math from 'mathjs';
import React from 'react';

	function degToRad(degValue) {
		return degValue*math.pi/180;
	}

export const distance = function (lat1, lat2, lng1, lng2) {
		lat1 = degToRad(lat1);
		lat2 = degToRad(lat2);
		lng1 = degToRad(lng1);
		lng2 = degToRad(lng2);
		const earthRadius = 6372795;
		let pt1 = math.square(math.sin((lat2 - lat1) * 0.5));
		let pt21 = math.cos(lat1)*math.cos(lat2);
		let pt22 = math.square(math.sin((lng2 - lng1) * 0.5));
		let pt2 = math.multiply(pt21, pt22);
		let rooted = math.sqrt(pt1+pt2);
		let final = math.floor(2*earthRadius*math.asin(rooted));
		return final;
	}

export const ingridientConverter = function(order) {
	let ing1 = order.dish1*100 + order.dish3*140
	let ing2 = order.dish1*40 + order.dish2*150
	let ing3 = order.dish1*75 + order.dish3*110
	let ing4 = order.dish2*120
	let ing5 = order.dish1*20 + order.dish2*15
	let ing6 = order.dish3*60
	let ing7 = order.dish1*10
	let ing8 = order.dish2*20 + order.dish3*75
	let ing9 = order.dish1*80 + order.dish2*30
	let ing10 =order.dish3*55
	let ings = [ing1, ing2, ing3, ing4, ing5, ing6, ing7, ing8, ing9, ing10]
	let result = ''
	for(let i=0; i<ings.length; i++) {
		result += `Ингридиента ${i+1} надо ${ings[i]} единиц. `
	}
	return result;
}
export const sortNumber = function(a, b) {
	return a - b;
}