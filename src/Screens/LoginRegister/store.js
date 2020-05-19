import React, {Component} from 'react';

import { Grid } from 'semantic-ui-react';
import loginRegister from './../../assets/loginRegister.png';

import axios from 'axios';

import { sessionURL } from '../../Routes/sessionURL';
import './Register.scss';
import { validEmailRegex } from '../../helpers/validEmailRegex';
import { validPassword } from '../../helpers/validPassword';





class Store extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            userName: "",
            password: "",
            email: "",
            bank: "",
            bankAccount: "",
            formValid: false,
            errorCount: null,
            errors: {
                fullName: "",
                userName: "",
                password: "",
                email: "",
                bank: "",
                bankAccount: ""
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        // this.setState({[e.target.name]: e.target.value});
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;

        switch (name) {
            case 'fullName': 
                errors.fullName = 
                value.length < 5
                    ? 'Full Name must be 5 characters long!'
                    : '';
                break;
            case 'userName': 
                errors.userName = 
                value.length < 5
                    ? 'user name must be 5 characters long!'
                    : '';
                break;
            case 'password': 
                errors.password = 
                    validPassword.test(value)
                    ? ''
                    : 'Password need to have 6 to 20 characters which contain at least one numeric, one uppercase and one lowercase letter';
                break;
            case 'email': 
                errors.email = 
                    validEmailRegex.test(value)
                    ? ''
                    : 'Email  is not valid!';
                break;
            case 'bank': 
                errors.bank = 
                    value.length < 2
                    ? 'Bank must be at least 2 characters long!'
                    : '';
                break;
            case 'bankAccount': 
                errors.bankAccount = 
                    value.length < 8
                    ? 'Bank account must be 8 numbers!'
                    : '';
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
        
        const {userName, email, password, errors} = this.state;
        
        
        const validInput = userName !== "" && email !== "" && password !== "";
        const validSubmit = errors.userName === "" && errors.email === "" && errors.password === ""


        if(validInput){
            if(validSubmit) {
                alert("valid")
                // axios.post(url, {
                // // name: this.state.name,
                // username: this.state.userName,
                // password: btoa(this.state.password),
                // email: this.state.email,
                // // bank: this.state.bank,
                // // bankAccount: this.state.bankAccount
                // })
                // .then(res => {
                //     alert("success")
                //     this.props.history.push("/login");
                // })
                // .catch(err => { 
                //     // this.setState({errorMessage: err.message});
                //     alert("wrongg")
                //     this.setState({
                //         name: "",
                //         userName: "",
                //         password: "",
                //         email: "",
                //         bank: "",
                //         bankAccount: "",
                //         errors: {
                //             fullName: "",
                //             userName: "",
                //             password: "",
                //             email: "",
                //             bank: "",
                //             bankAccount: ""
                //         }
                        
                //     });
                // })
            } else{
                alert("invalid")
            }
            
        } else{
            alert("You need to type")
        }
        // if(validateForm(this.state.errors)){
        //     alert("Fail")
        // } else {
        //     alert("fuk")
            // axios.post(url, {
            //     // name: this.state.name,
            //     username: this.state.userName,
            //     password: btoa(this.state.password),
            //     email: this.state.email,
            //     // bank: this.state.bank,
            //     // bankAccount: this.state.bankAccount
            // })
            // .then(res => {
            //     alert("success")
            //     this.props.history.push("/login");
            // })
            // .catch(err => { 
            //     // this.setState({errorMessage: err.message});
            //     alert("wrongg")
            //     this.setState({
            //         name: "",
            //         userName: "",
            //         password: "",
            //         email: "",
            //         bank: "",
            //         bankAccount: "",
            //         errors: {
            //             fullName: "",
            //             userName: "",
            //             password: "",
            //             email: "",
            //             bank: "",
            //             bankAccount: ""
            //         }
                    
            //       });
            // })
        // }
        
    }


    render(){
        const { fullName ,userName, email, password, bank, bankAccount } = this.state
        const {errors, formValid} = this.state;

        return(
            
           <Grid divided="vertically">
               <Grid.Row columns={2}>
                   <Grid.Column width={7}>
                    <img src={loginRegister} className="img"/>
                   </Grid.Column>
                   <Grid.Column width={9}>
                   <form onSubmit={this.onSubmit} noValidate className="form">
            <h1>Đăng ký</h1>
              {/* Name */}
            {/* <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.onChange} value={fullName} noValidate/>
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div> */}
            
            {/* User name */}
            <div className='fullName'>
              <label htmlFor="userName">User Name</label>
              <input type='text' name='userName' onChange={this.onChange} value={userName} noValidate/>
              {errors.userName.length > 0 && 
                <span className='error'>{errors.userName}</span>}
            </div>

                {/* Password */}
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='text' name='password' onChange={this.onChange} value={password} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>

            {/* Email */}
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.onChange} value={email} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>

            {/* Bank */}
            {/* <div className='email'>
              <label htmlFor="bank">Bank</label>
              <input type='text' name='bank' onChange={this.onChange} value={bank} noValidate />
              {errors.bank.length > 0 && 
                <span className='error'>{errors.bank}</span>}
            </div>
             */}
            {/* Bank account */}
            {/* <div className='email'>
              <label htmlFor="bankAccount">Bank Account</label>
              <input type='number' name='bankAccount' onChange={this.onChange} value={bankAccount} noValidate />
              {errors.bankAccount.length > 0 && 
                <span className='error'>{errors.bankAccount}</span>}
            </div> */}
            {}
            <div className='submit'>
              <button type="submit">Create</button>
            </div>
            
          </form>
                   </Grid.Column>
               </Grid.Row>
           </Grid>
              
          
        )
    }
}

export default Store