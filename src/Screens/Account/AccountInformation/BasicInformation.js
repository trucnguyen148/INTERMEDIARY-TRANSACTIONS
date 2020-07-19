import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { sessionURL } from '../../../Routes/sessionURL';
import axios from 'axios';
import { header } from '../../../Routes/headers';

class BasicInformation extends Component{
    constructor(props){
        super(props);
        this.state = {
            profile: []
        }  
    }
    loadData(){
        const url = sessionURL + "profile";
        return axios.get(url, {
            headers: header
        })
        .then(result => {
            console.log(result);
            this.setState({
                profile: result.data.data
            })
        })
        .catch(error => {
            console.error("error: ", error);
        })
    }
    componentDidMount(){
        this.loadData();
    }
    render(){
        const {profile} = this.state;
        console.log(profile)
        return(
            <div>
                <Grid divided="vertically">
                    <Grid.Row columns={3}>
                        <Grid.Column width={5}>
                            <div className="centerMain">
                                <Image src={"https://react.semantic-ui.com/images/wireframe/square-image.png"} size='small' circular style={{marginLeft: 'auto', marginRight: 'auto'}} />

                            </div>
                            
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <div className="centerMain">
                                <div className="verticalLineMain"/>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <div className="centerMain">
                                <Grid divided="vertically">
                                    <Grid.Row columns={2}>
                                        <Grid.Column width={4}>
                                            <label>Họ tên</label>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <p>{profile.first_name}</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={2}>
                                        <Grid.Column width={4}>
                                            <label>Email</label>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <p>{profile.email}</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={2}>
                                        <Grid.Column width={4}>
                                            <label>Tên tài khoản</label>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <p>{profile.user_name}</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default BasicInformation