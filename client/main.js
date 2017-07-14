import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {Orders} from '../imports/api/Orders';

import {routes} from '../imports/routes/routes';

Tracker.autorun(() => {
	console.log(Orders.find({status: 'awaiting placement'}).fetch());
});
 
Meteor.startup(() =>{
	ReactDOM.render(routes, document.getElementById("app"));
})