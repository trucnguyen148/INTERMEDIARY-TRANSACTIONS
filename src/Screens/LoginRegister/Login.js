import React, {Component} from 'react';
import axios from 'axios';
import { sessionURL } from '../../Routes/sessionURL';
import { Grid } from 'semantic-ui-react';
import loginRegister from './../../assets/loginRegister.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import "./../../styles/LoginRegister.scss";

import {faUnlockAlt} from '@fortawesome/free-solid-svg-icons';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const url = sessionURL + "token";

        const {username, password} = this.state;

        const validInput = username !== "" && password !== "";

        if (validInput){
            axios.post(url, {
                username: this.state.username,
                password: btoa(this.state.password),
            })
            .then(res => {
                localStorage.setItem('jwt', res.data.data.access_token);
                this.props.history.push("/account");
            })
            .catch(err => { 
                this.setState({errorMessage: "Tài khoản hoặc mật khẩu không đúng"});
                this.setState({
                    username: '',
                    password: ''
                  });
            })
        } else {
            this.setState({errorMessage: "Bạn cần điền đủ thông tin tài khoản và mật khẩu"})
        }
       
    }

    render(){
        return(
            <Grid divided="vertically">
                <Grid.Row columns={2}>
                    <Grid.Column width={7}>
                        <div className="center">
                            <img src={loginRegister} className="img" alt="Login"/>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <div className="center">
                            <div className="background heightBackground">
                                <div className="verticalCenter heightLogin">
                                    <form onSubmit={this.onSubmit} className="form" >
                                        <div className="title"><h1>Đăng nhập</h1></div>
                                        <div className="lineHeight">
                                            <FontAwesomeIcon icon={faUser} className="iconColor"/>
                                            <input 
                                                type="text" 
                                                name="username" 
                                                onChange={this.onChange} 
                                                value={this.state.username} 
                                                className="input"
                                            />
                                        </div>
                                        <div className="lineHeight">
                                            <FontAwesomeIcon icon={faUnlockAlt} className="iconColor"/>
                                            <input 
                                                type="text" 
                                                name="password" 
                                                onChange={this.onChange} 
                                                value={this.state.password}
                                                className="input"
                                            />
                                        </div>
                                        <div className="spaceErrors">
                                        <span className="errors"> {this.state.errorMessage} </span>
                                        </div>
                                        <button type="submit" className="btnLoginRegister">Đăng nhập</button>
                                        
                                       
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
        )
    }
}

export default Login