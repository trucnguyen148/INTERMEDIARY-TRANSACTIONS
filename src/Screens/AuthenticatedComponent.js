import React, {Component} from 'react';

import history from './../Routes/history';

import { getJwt } from '../helpers/jwt';
import { withRouter } from 'react-router-dom';
import { sessionURL } from '../Routes/sessionURL';

import axios from 'axios';

class AuthenticatedComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: undefined
        };
    }

    componentDidMount(){
        const jwt = getJwt;
        if(!jwt) {
            history.push('/');
        }

        const url = sessionURL + "profile"

        axios
            .get(
                url, 
                {headers: {Authorization: `Bearer ${jwt()}`}}
            )
            .then(res =>this.setState({
                user: res.data
            }))
            .catch(err => {
                localStorage.removeItem("jwt");
                history.push("/login");        
            })
    }
    render(){
        if(this.state.user === undefined){
            return(
                <div><h1>Loading...</h1></div>
            );
        }
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(AuthenticatedComponent);