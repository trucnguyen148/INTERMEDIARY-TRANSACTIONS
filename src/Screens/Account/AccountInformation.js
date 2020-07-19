import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import BasicInformation from './AccountInformation/BasicInformation';
import Buy from './AccountInformation/Buy';
import Sale from './AccountInformation/Sale';
import HistoryPoint from './AccountInformation/HistoryPoint';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faHandsHelping, faHistory } from '@fortawesome/free-solid-svg-icons';
import information from './../../assets/Information.png'
import './../../styles/Account.scss';

class AccountInformation extends Component{

    render(){
        return(
            <div className="container">
                <Grid divided="vertically">
                    <Grid.Row column={2}>
                        <Grid.Column width={7}>
                            <img src={information} className="imgAccount" alt=""/>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <div className="marginTopTitle">
                                <h1 className="titleAccount">Thông tin sản phẩm</h1>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <div>
                    <Router>
                    <Grid divided="vertically">
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <div>
                                    <NavLink
                                        exact={true}
                                        className="navbarAccount"
                                        activeClassName="activeNavBarAccount"
                                        to="/account/"
                                    >
                                        <FontAwesomeIcon icon={faUser} size="2x"/>
                                        <h5>Thông tin</h5>
                                    </NavLink>
                                </div>
                                
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <NavLink
                                        className="navbarAccount"
                                        activeClassName="activeNavBarAccount"
                                        to="/account/buy"
                                    >
                                    <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
                                    <h5>Giao dịch mua</h5>
                                    </NavLink>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="">
                                    <NavLink
                                        className="navbarAccount"
                                        activeClassName="activeNavBarAccount"
                                        to="/account/sale"
                                    >
                                    <FontAwesomeIcon icon={faHandsHelping} size="2x"/>
                                    <h5>Giao dịch bán</h5>
                                    </NavLink>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div >
                                    <NavLink
                                        className="navbarAccount"
                                        activeClassName="activeNavBarAccount"
                                        to="/account/historyPoint"
                                    >
                                    <FontAwesomeIcon icon={faHistory} size="2x"/>
                                    <h5>Lịch sử nạp tiền</h5>
                                    </NavLink>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Switch>
                        <Route path="/account/buy" exact component={Buy}/>
                        <Route path="/account/sale" exact component={Sale}/>
                        <Route path="/account/historyPoint" exact component={HistoryPoint}/>
                        <Route path="/account" exact component={BasicInformation}/>
                    </Switch>
                    </Router>
                </div>
                
            </div>
        )
    }
}

export default AccountInformation