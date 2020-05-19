import React, { Component } from 'react';

import { Router, NavLink} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import './../styles/navbar.scss';

import { Dropdown, Icon } from 'semantic-ui-react';
import history from './../Routes/history';

class MainPage extends Component {
  constructor(props){
    super(props);
    
    this.onLogOut = this.onLogOut.bind(this);

  }

  onLogOut(){
    localStorage.removeItem("jwt");
    window.location = "/terms"      
  }


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
                
                {localStorage.getItem("jwt") === null
                ? <button style={{
                  width: '100%', 
                  color: 'white',
                  backgroundColor: 'black'
                  
                }} onClick={()=> history.push("/login")}><Icon name="user"/></button>
                : <Dropdown 
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
                  <Dropdown.Item><button onClick={this.onLogOut}>Log out</button></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                }
                
              </div>
            </li>

          </ul>
        </nav>
        
      </Router>

    );
  }
}

export default MainPage;

