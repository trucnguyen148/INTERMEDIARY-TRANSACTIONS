import React, {Component} from 'react';
import { Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

import history from '../Routes/history';

import loginRegister from './../assets/loginRegister.png';

import "./../styles/LoginRegister.scss";

class LoginRegister extends Component{

    
    render(){
        
        return(
            <Grid divided="vertically">
                <Grid.Row columns={2}centered >
                    <Grid.Column width={7}   >
                        <div className="center">
                            <img src={loginRegister} className="img" alt="Login Register"/>
                        </div>
                        
                    
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <div className="center">
                            <div className="background heightBackground">
                                <div className="verticalCenter height">
                                    <div className="btnCenter">
                                        <button 
                                            onClick={()=> history.push("/login")}
                                            className="btn"
                                        >
                                            Đăng nhập
                                        </button>
                                    </div>
                                    <div className="btnCenter">
                                        <button 
                                            onClick={()=> history.push("/register")}
                                            className="btn"
                                        >
                                        Đăng ký
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        
                            </div>
                        
                        
                    </Grid.Column>
                </Grid.Row>

            
            </Grid>        
            
        )
    }
}

export default LoginRegister