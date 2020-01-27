import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '././components/Home_Content/Home_Content';

const Routes = () => (
<BrowserRouter >
<Switch>
<Route path="/" component={Home}/>
<Route path="/home" component={Home}/>
</Switch>
</BrowserRouter>
);
export default Routes;