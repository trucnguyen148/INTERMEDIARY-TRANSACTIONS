import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

import createTransaction from './../../assets/CreateTransaction.png';

import "./../../styles/Main.scss";

import { sessionURL } from '../../Routes/sessionURL';
import { header } from '../../Routes/headers';

import axios from 'axios';

class CreateTransaction extends Component{
    constructor(props){
        super(props);
        this.state = {
            points: "",
            receiver: "",
            comment: "",
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
        const url = sessionURL + "deals";
        const {points, receiver, comment} = this.state;
        const validInput = points !== "" && receiver !== "" && comment !== "";
        

        if(validInput){
            axios.post(url, {
                points: points,
                partner_id: receiver,
                comment : comment
            }, {
                headers: header
            })
            .then(response => { 
                alert("sucess");
                console.log(response)
            })
            .catch(err => {
                this.setState({errorMessage: err.message
                });
                console.log(err.response)
            });
        }
        else{
            alert("type")
        }
    }
    render(){
        const {points, receiver, comment} = this.state
        return(
            <Grid divided="vertically">
                <Grid.Row columns={3}>
                    <Grid.Column width={6}>
                        <div className="centerMain">
                            <img src={createTransaction} className="imgMain" alt="icon of Add Point"/>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <div className="centerMain">
                            <div className="verticalLineMain"></div>
                        </div>
                        
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <div className="centerMain">
                            <form className="formMain formTransaction" onSubmit={this.onSubmit}>
                                <div className="verticalSpaceMain titleMain createTransaction">
                                    <h1 >Tạo giao dịch</h1>
                                </div>
                                <div className="verticalSpaceMain">
                                    <Grid divided="vertically">
                                        <Grid.Row columns={2}>
                                            <Grid.Column width={4}>
                                                <label>Điểm</label>
                                            </Grid.Column>
                                            <Grid.Column width={12}>
                                            <input 
                                                type="number"
                                                name="points"
                                                value={points}
                                                onChange={this.onChange}
                                                className="inputMain inputBorderCreateTransaction"/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    
                                    
                                </div>
                                
                                <div className="verticalSpaceMain">
                                    <Grid divided="vertically">
                                        <Grid.Row columns={2}>
                                            <Grid.Column width={4}>
                                            <label>Người nhận</label>
                                            </Grid.Column>
                                            <Grid.Column width={12}>
                                                <input 
                                                    type="text"
                                                    name="receiver"
                                                    value={receiver}
                                                    onChange={this.onChange}
                                                    className="inputMain inputBorderCreateTransaction"/>
                                                <div className="spaceErrors">
                                                    { this.state.errorMessage && <span className="errors"> Tài khoản người nhận không đúng </span> }
                                                </div>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                   
                                    

                                        
                                </div>
                                <div className="verticalSpaceMain">
                                <Grid divided="vertically">
                                        <Grid.Row columns={2}>
                                            <Grid.Column width={4}>
                                                <label>Thỏa thuận giao dịch</label>
                                            </Grid.Column>
                                            <Grid.Column width={12}>
                                                <textarea 
                                                    name="comment"
                                                    value={comment}
                                                    onChange={this.onChange}
                                                    className="inputMain inputBorderCreateTransaction textAreaMain" 
                                                />     
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    
                                    
                                </div>
                                <div className="verticalSpaceMain">
                                <Grid divided="vertically">
                                        <Grid.Row columns={2}>
                                            <Grid.Column width={4}>
                                                <label>Lưu ý</label>
                                            </Grid.Column>
                                            <Grid.Column width={12}>
                                            <p className="inputMain">Yêu cầu điền đầy đủ và chính xác những thỏa thuận mua bán của 2 bên đã giao kèo, thương lượng. Đây sẽ là căn cứ để giải quyết tranh chấp nếu có</p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    
                                    
                                    
                                </div>
                                
                                <div className="btnWidth">
                                    <button type="submit" className="btnMain btnCreateTransaction">Gửi</button>
                                </div>
                            </form>
                        </div>
                        
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default CreateTransaction