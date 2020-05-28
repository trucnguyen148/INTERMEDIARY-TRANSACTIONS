import React, {Component} from 'react';

import { Grid } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import loginRegister from './../../assets/loginRegister.png';

import axios from 'axios';
import history from './../../Routes/history';

import { sessionURL } from '../../Routes/sessionURL';
import './Register.scss';
import { validEmailRegex } from '../../helpers/validEmailRegex';
import { validPassword } from '../../helpers/validPassword';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            errors: {
                username: "",
                password: "",
                email: ""
            },
            errorMessage: "",
            isCheck: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        e.preventDefault();
        const { name, value } = e.target;
        const {username, email, password} = this.state;
        const validInput = username !== "" && email !== "" && password !== "";

        if(validInput){
            this.setState({
            errorMessage: ""
            })
        }
        

        let errors = this.state.errors;

        switch (name) {
            case 'username': 
                errors.username = 
                value.length < 5
                    ? 'Tên tài khoản cần có ít nhất 5 ký tự'
                    : '';
                break;
            case 'password': 
                errors.password = 
                    validPassword.test(value)
                    ? ''
                    : 'Mật khẩu cần có từ 6 tới 20 ký tự và gồm ít nhất 1 số, 1 chữ in hoa, 1 chữ thường và 1 ký tự đặc biệt';
                break;
            case 'email': 
                errors.email = 
                    validEmailRegex.test(value)
                    ? ''
                    : 'Tài khoản email không đúng';
                break;
            default:
                break;
        }

        this.setState({[e.target.name]: e.target.value});
        this.setState({errors, [name]: value});
    }

    onSubmit(e){
        e.preventDefault();
        const url = sessionURL + "sign-up";
        const {username, email, password, errors} = this.state;
        const validInput = username !== "" && email !== "" && password !== "";
        const validSubmit = errors.username === "" && errors.email === "" && errors.password === ""


        if(validInput){
            if(validSubmit) {
                axios.post(url, {
                username: this.state.username,
                password: btoa(this.state.password),
                email: this.state.email
                })
                .then(res => {
                    alert("Bạn đã đăng ký thành công")
                    history.push("/login");
                })
                .catch(err => { 
                    this.setState({
                        username: "",
                        password: "",
                        email: "",
                        errors: {
                            username: "",
                            password: "",
                            email: ""
                        },
                        errorMessage: err.message
                    });
                })
            } else{
                this.setState({
                    errorMessage: "Bạn cần phải điền đúng theo các yêu cầu"
                })
            }
            
        } else{
            this.setState({
                errorMessage: "Bạn cần nhập đầy đủ thông tin để đăng ký"
            })
        }
    }


    render(){
        const { username, email, password, isCheck } = this.state
        const {errors} = this.state;

        return(
           <Grid divided="vertically">
               <Grid.Row columns={2}>
                   <Grid.Column width={7}>
                       <div className="center">
                        <img src={loginRegister} className="img " alt="Register"/>
                       </div>
                   </Grid.Column>
                   <Grid.Column width={9}>
                       <div className="center">
                            <div className="background heightbackgroundRegister">
                                <div className="verticalCenter heightRegister">
                                    <form onSubmit={this.onSubmit} noValidate className="form">
                                        <h1 className="title">Đăng ký</h1>
                                        {/* User name */}
                                        <div className='lineHeight'>
                                            <FontAwesomeIcon icon={faUser} className="iconColor"/>
                                            <input 
                                                type='text'
                                                name='username'
                                                onChange={this.onChange}
                                                value={username}
                                                noValidate
                                                className="input"
                                            />
                                            <div className="spaceErrors">
                                                {errors.username.length > 0 && 
                                                <span className='errors'>{errors.username}</span>}
                                            </div>
                                        </div>

                                        {/* Password */}
                                        <div className='lineHeight'>
                                            <FontAwesomeIcon icon={faUnlockAlt} className="iconColor"/>
                                            <input 
                                                type='text' 
                                                name='password'
                                                onChange={this.onChange} 
                                                value={password} 
                                                noValidate 
                                                className="input"/>
                                            <div className="spaceErrors">
                                                {errors.password.length > 0 && 
                                                <span className='errors'>{errors.password}</span>}
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className='lineHeight'>
                                            <FontAwesomeIcon icon={faEnvelope} className="iconColor"/>
                                            <input 
                                                type='email' 
                                                name='email' 
                                                onChange={this.onChange}
                                                value={email} 
                                                noValidate 
                                                className="input"/>
                                                <div className="spaceErrors">
                                                    {errors.email.length > 0 &&
                                                    <span className='errors'>{errors.email}</span>}
                                                </div>
                                        </div>

                                        <div class="ui checkbox">
                                            <input type="checkbox" readonly="" tabindex="0" value={isCheck}/>
                                            
                                            <label>Tôi đồng ý với các <button onClick={()=> history.push("/terms")}>điều khoản</button></label>
                                        </div>
                                        <div className="spaceErrors">
                                        <span className="errors"> {this.state.errorMessage} </span>
                                        </div>
                                        <div>
                                            <button type="submit" className="btnLoginRegister">Đăng ký</button>
                                        </div>
                                        
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

export default Register