import React, {Component} from 'react';
import {Router, Switch, Route} from 'react-router-dom';

import AboutUs from '../Screens/AboutUs';
import Terms from '../Screens/Terms';
import AccountInformation from '../Screens/Account/AccountInformation';
import AccountConfirmation from '../Screens/Account/AccountConfirmation';
import PointManagement from '../Screens/Account/PointManagement';
import LoginRegister from '../Screens/LoginRegister';


import Login from '../Screens/LoginRegister/Login';
import Register from '../Screens/LoginRegister/Register';

import history from './history';

export default class SwitchRoutes extends Component{
    render(){
        return(
            
                <Switch>
                    <Route path="/" exact component={LoginRegister}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/aboutus" exact component={AboutUs}/>
                    <Route path="/terms" exact component={Terms}/>
                    <Route path="/account" exact component={AccountInformation}/>
                    <Route path="/accountconfirmation" exact component={AccountConfirmation}/>
                    <Route path="/pointmanagement" exact component={PointManagement}/>
                </Switch>
            
        )
    }
}