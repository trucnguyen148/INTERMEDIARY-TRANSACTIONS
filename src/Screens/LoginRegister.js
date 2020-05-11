import React, {Component} from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';

import history from '../Routes/history';

import loginRegister from './../assets/loginRegister.png'

class LoginRegister extends Component{

    
    render(){
        return(
            <Grid divided="vertically">
                <Grid.Row columns={2}>
                    <Grid.Column>
                    <Image src={loginRegister} size='medium' />
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick={()=> history.push("/login")}>
                            hello
                        </Button>
                        <Button onClick={()=> history.push("/register")}>hello</Button>
                    </Grid.Column>
                </Grid.Row>
            
            </Grid>        
        )
    }
}

export default LoginRegister