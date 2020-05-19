import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

import addPoint from './../../assets/AddPoint.png';

import "./../../styles/Main.scss";
import { sessionURL } from '../../Routes/sessionURL';
import axios from 'axios';
import { getJwt } from '../../helpers/jwt';

class AddPoint extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: "",
            message: "",
            // photo: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const jwt = getJwt;
        const url = sessionURL + "";
        axios
            .post(url, {headers: {Authorization: `Bearer ${jwt()}`}})
            .then(res => {
                this.setState({
                    number: res.data.number,
                    message: res.data.message,
                    photo: res.data.photo
                })
            })
            .catch(err => {
                console.error("error: ", err)
            })
            
    }
    
    render(){
        const {number, message } = this.state;

        return(
            <Grid divided="vertically">
                <Grid.Row columns={3}>
                    <Grid.Column width={6}>
                        <div className="centerMain">
                            <img src={addPoint} className="imgMain" alt="icon of Add Point"/>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <div className="centerMain">
                            <div className="verticalLineMain"></div>
                        </div>
                        
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <div className="centerMain">
                            <form className="formMain formPoint">
                                <div className="verticalSpaceMain titleMain addPoint">
                                    <h1 >Nạp tiền</h1>
                                </div>
                                <div className="verticalSpaceMain">
                                    <label>Số tiền</label>
                                    <input 
                                        type="number"
                                        name="number"
                                        value={number}
                                        onChange={this.onChange}
                                        className="inputMain inputBorderMain"/>
                                </div>
                                <div className="verticalSpaceMain">
                                    <label>Tin nhắn</label>
                                    <textarea 
                                        name="message"
                                        value={message}
                                        onChange={this.onChange}
                                        className="input inputBorderMain textAreaMain" 
                                    />
                                </div>
                                <div className="verticalSpaceMain">
                                    <label>Hình ảnh</label>
                                    <input 
                                    
                                    className="inputMain" type="file"  />
                                </div>
                                <div className="btnTest">
                                    <button type="submit" className="btnMain">Gửi</button>
                                </div>
                            </form>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default AddPoint;