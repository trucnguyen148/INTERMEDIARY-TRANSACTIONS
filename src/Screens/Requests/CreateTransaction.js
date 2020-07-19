import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

import createTransaction from './../../assets/CreateTransaction.png';

import "./../../styles/Main.scss";

import { sessionURL } from '../../Routes/sessionURL';
import { header } from '../../Routes/headers';

import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class CreateTransaction extends Component{
    constructor(props){
        super(props);
        this.state = {
            points: "",
            username: "",
            receiver: "",
            comment: "",
            errorMessage: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        
        });
    }

    onMouseLeave(){
        const {username} = this.state;

        const url = sessionURL + "users/" + username
        
        return axios 
        .get(url, {
            headers: header
        })
        .then(result => {
            console.log(url)
            this.setState({
                receiver: result.data.data,
                errorMessage: <FontAwesomeIcon icon={faCheck}/>
            })
            console.log(this.state.receiver.id)
           
        })
        .catch(error => {
            console.error("error: ", error)
            this.setState({
                errorMessage: <FontAwesomeIcon icon={faTimes} />
            })
        })
    }  

    onSubmit(e){
        e.preventDefault();
        const url = sessionURL + "deals";
        const {points, receiver, comment} = this.state;
        const validInput = points !== "" && receiver !== "" && comment !== "";
        console.log(receiver.id)

        if(validInput){
            axios.post(url, {
                points: points,
                partner_id: receiver.id,
                comment : comment
            }, {
                headers: header
            })
            .then(response => { 
                alert("Bạn đã tạo giao dịch thành công");
                window.location.reload();
                console.log(response)
            })
            .catch(err => {
                this.setState({errorMessage: err.message
                });
                console.log(err.response)
            });
        }
        else{
            alert("Vui lòng nhập đầy đủ thông tin")
        }
    }
    render(){
        const {points, comment, username} = this.state
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
                                        <Grid.Row columns={3}>
                                            <Grid.Column width={4}>
                                            <label>Người nhận</label>
                                            </Grid.Column>
                                            <Grid.Column width={11}>
                                                
                                                <input 
                                                    type="text"
                                                    name="username"
                                                    value={username}
                                                    onMouseLeave = {this.onMouseLeave}
                                                    onChange={this.onChange}
                                                    className="inputMain inputBorderCreateTransaction"/>
                                                    
                                            </Grid.Column>
                                            <Grid.Column width={1}>
                                            <p style={{marginLeft: '-5rem'}}>{this.state.errorMessage}</p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>  
                                </div>
                                <div className="verticalSpaceMain">
                                    <Grid divided="vertically">
                                        <Grid.Row columns={2}>
                                            <Grid.Column width={4}>
                                                <label>Điểm</label>
                                            </Grid.Column>
                                            <Grid.Column width={11}>
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
                                            <label>Thỏa thuận giao dịch</label>
                                        </Grid.Column>
                                        <Grid.Column width={11}>
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
                                            <Grid.Column width={11}>
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