import React, { Component } from 'react';

import { Router, NavLink} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import './../styles/styles.scss';

import { Dropdown } from 'semantic-ui-react';
import history from './../Routes/history';
import Routes from './../Routes/Routes';

export default class MainPage extends Component {

  render(){
    return (
      <Router history={history}>
        <nav className="container navbar ">
          <ul className="navList">
            <li>
              <NavLink 
                exact={true} 
                className="colorList"
                activeClassName='activeLink'
                to="/"
              >
                TRANG CHỦ
              </NavLink>
            </li>
            <li>
              <NavLink 
                className="colorList"
                activeClassName='activeLink' 
                to="/aboutus"
                >
                  VỀ CHÚNG TÔI
                </NavLink>
            </li>
            <li>
              <NavLink 
                className="colorList"
                activeClassName='activeLink' 
                to="/terms"
              >
                ĐIỀU KHOẢN
              </NavLink>
            </li>
            <li className="navAccount">
              <div className="accountIcon">
              <Dropdown 
                icon='user'
                floating
                labeled
                button
                fluid
                className='icon'
                style={{
                  width: '100%', 
                  color: 'white',
                  backgroundColor: 'black'
                  
                }}
              >
                <Dropdown.Menu style={{backgroundColor: '#000000'}} >
                  <Dropdown.Item className="spaceLine">
                    <NavLink 
                        className="colorListAccount"
                        activeClassName='activeLink' 
                        to="/account"
                      >
                        Thông tin cá nhân
                      </NavLink> 
                  </Dropdown.Item>
                  <Dropdown.Item className="spaceLine">
                    <NavLink 
                      className="colorListAccount"
                      activeClassName='activeLink' 
                      to="/accountconfirmation"
                    >
                      Xác nhận tài khoản
                    </NavLink> 
                  </Dropdown.Item>
                  <Dropdown.Item className="spaceLine">
                    <NavLink 
                      className="colorListAccount"
                      activeClassName='activeLink' 
                      to="/pointmanagement"
                    >
                      Quản lí điểm
                    </NavLink> 
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </li>
          </ul>
        </nav>
        <Routes/>
      </Router>

    );
  }
}


