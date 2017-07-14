import { Meteor } from 'meteor/meteor';
import googleMaps from '@google/maps';
import {Orders} from '../imports/api/Orders';
import {key} from '../imports/api/googleMaps'

Meteor.startup(() => {
  
});

Meteor.methods({
	'address.check'(address, order) {
		let googleMapsClient = googleMaps.createClient({
  			key
  		});
		
    	var promise = new Promise (function(resolve, reject) {
    		googleMapsClient.geocode({address}, function(err, response) {
  			if (!err) {				
  				//console.log(response.json.results[0].geometry.location) 				
  				let geo = response.json.results[0].geometry.location;
  				resolve(geo);  				
  			} else {
  				reject('Not working')
  			}
		})
    	})		
		promise.then(function(result) {
			Orders.insert({
				location: result,
				deliveryAddress: address,
				status: 'awaiting placement',
				cookingPoint: '0',
				order
			});
		})
		//console.log(res);
	}
})