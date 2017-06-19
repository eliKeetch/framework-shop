import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Landing from './Landing/Landing.js';
import Shop from './Shop/Shop.js';
import Details from './Details/Details.js';
import Cart from './Cart/Cart.js';
import ThankYou from './ThankYou/ThankYou.js';

export default (
<Switch>
    <Route component={ Landing } exact path="/" />
    <Route component={ Shop } path="/shop" />
    <Route component={ Details } path="/details/:name" />
    <Route component={ Cart } path="/cart" />
    <Route component={ ThankYou } path="/thank-you" />
</Switch>    
)