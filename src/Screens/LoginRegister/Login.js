import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const session_url = "http://meoo164.tk:8085/gdtg-public/token"
        axios.post(session_url, {
            username: this.state.username,
            password: btoa(this.state.password),
        })
        
        .then(res => {
            localStorage.setItem('jwt', res.data);
            this.props.history.push("/account")
        });
        
        }

    render(){
        return(
            <div>
                
                <form onSubmit={this.onSubmit}>
                    <label>username</label>
                    <input type="text" name="username" onChange={this.onChange} value={this.state.username}/>
                    <label>password</label>
                    <input type="text" name="password" onChange={this.onChange} value={this.state.password}/>
                    <button type="submit">Submit</button>
                    
                </form>
                
            </div>
        )
    }
}

export default Login