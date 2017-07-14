import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import MyMath from '../ui/MyMath';
import Recipies from '../ui/Recipies';
import AddressForm from '../ui/AddressForm';
import Buttons from '../ui/Buttons';

export const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Buttons}/>
		<Route path="/recipies" component={Recipies}/>		
		<Route path="/address" component={AddressForm}/>		
	</Router>
	)