import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import MainPage from './Screens/MainPage';
import LoginRegister from './Screens/LoginRegister';
import Login from './Screens/LoginRegister/Login';
import Register from './Screens/LoginRegister/Register';
import AboutUs from './Screens/AboutUs';
import AccountInformation from './Screens/Account/AccountInformation';
import Terms from './Screens/Terms';
import AccountConfirmation from './Screens/Account/AccountConfirmation';
import PointManagement from './Screens/Account/PointManagement';
import history from './Routes/history';
import AuthenticatedComponent from './Screens/AuthenticatedComponent';
import AddPoint from './Screens/Requests/AddPoint';
import CreateTransaction from './Screens/Requests/CreateTransaction';
import TakeMoneyOut from './Screens/Requests/TakeMoneyOut';



export default class App extends Component {

  render(){
    
    const DefaultContainer = () => {
      return(
        <div>
            <MainPage/>
            <Switch>
              <Route path="/aboutus" exact component={AboutUs}/>
              <Route path="/terms" exact component={Terms}/>
              <AuthenticatedComponent>
                <Route path="/account" exact component={AccountInformation}/>
                <Route path="/accountconfirmation" exact component={AccountConfirmation}/>
                <Route path="/pointmanagement" exact component={PointManagement}/>
                <Route path="/addpoint" exact component={AddPoint}/>
                <Route path="/createtransaction" exact component={CreateTransaction}/>
                <Route path="/takemoney" exact component={TakeMoneyOut}/>
              </AuthenticatedComponent>
            </Switch>
            
        </div>
      )
        
        
    }
    return(
        <Router history={history}>
            <Switch>
               <Route path="/" exact component={LoginRegister}/>
               <Route path="/login" component={Login} />
               <Route path="/register" exact component={Register}/>
                <Route component={DefaultContainer}/>
                {/* <Route path="/" exact component={MainPage}/> */}
                
                {/* <Route path="/auth" exact component={AuthenticatedComponent}/> */}
                
                
            </Switch>
        </Router>
        
    )
}
}


