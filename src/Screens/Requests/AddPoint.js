import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

import addPoint from './../../assets/AddPoint.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

import "./../../styles/Main.scss";
import { sessionURL } from '../../Routes/sessionURL';
import axios from 'axios';
import { header } from '../../Routes/headers';

class AddPoint extends Component{
    constructor(props){
        super(props);
        this.state = {
            amount: "",
            message: "",
            errorMessage: "",
            selectedFile: null
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
    }
    
    onChangeFile(e){
        this.setState({
            selectedFile: e.target.files[0],
            loaded: 0,
        })
    }
 
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit(e){
        e.preventDefault();
        
        const url = sessionURL + "points";
        const {amount, message, selectedFile} = this.state;
        const data = new FormData();
        data.append('file', this.state.selectedFile);

        const validInput = amount !== "" && selectedFile !== null;
        // const dataPost = {
        //     amount: amount,
        //     message: message,
        //     image: btoa(data)
        // }
        // const axiosConfig = {
        //     headers: header
        //   };
        if(validInput){
            axios.post(url, {
                amount: amount,
                message: message,
                image : btoa(data)
            }, {
                headers: header
            })
            .then(response => { 
                alert("sucess");
                console.log(response)
            })
            .catch(err => {
                alert("fail");
                console.log(err.response)
            });
        } else{
            this.setState({
                errorMessage: "nhap"
            })
        }
    }
    
    render(){
        const {amount, message, errorMessage } = this.state;

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
                        <div className="space">
                            <form className="formMain formPoint" onSubmit={this.onSubmit}>
                                <div className="verticalSpaceMain titleMain addPoint">
                                    <h1 >Nạp tiền</h1>
                                </div>
                                <div className="verticalSpaceMain">
                                    <Grid divided="vertically">
                                        <Grid.Row columns={2}>
                                            <Grid.Column width={4}>
                                                <label>Số tiền</label>
                                            </Grid.Column>
                                            <Grid.Column width={12}>
                                                <input 
                                                    type="number"
                                                    name="amount"
                                                    value={amount}
                                                    onChange={this.onChange}
                                                    className="inputMain inputBorderAddPoint"/>
                                                <input 
                                                type="text"
                                                name="message"
                                                value={message}
                                                onChange={this.onChange}
                                                className="inputMain inputBorderAddPoint"/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>
                                <div className="verticalSpaceMain">
                                    <Grid divided="vertically">
                                        <Grid.Row columns={2}>
                                            <Grid.Column width={4}>
                                                <label>Gửi đến</label>
                                            </Grid.Column>
                                            <Grid.Column width={12}>
                                                <Grid divided="vertically">
                                                    <Grid.Row columns={2}>
                                                        <Grid.Column width={4}>
                                                            <label>Chủ tài khoản</label>
                                                        </Grid.Column>
                                                        <Grid.Column width={12}>
                                                            <p>Lê Trọng Nghĩa</p>
                                                        </Grid.Column>
                                                        <Grid.Column width={4}>
                                                            <label>Số tài khoản</label>
                                                        </Grid.Column>
                                                        <Grid.Column width={12}>
                                                            <p>00843665001</p>
                                                        </Grid.Column>
                                                        <Grid.Column width={4}>
                                                            <label>Ngân hàng:</label>
                                                        </Grid.Column>
                                                        <Grid.Column width={12}>
                                                            <p>Tpbank</p>
                                                        </Grid.Column>
                                                        <Grid.Column width={4}>
                                                            <label>Chi nhánh</label>
                                                        </Grid.Column>
                                                        <Grid.Column width={12}>
                                                            <p>Hà Nội</p>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
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
                                                <p className="inputMain">Bạn hãy chuyển khoản số tiền tương ứng với số điểm cần nạp, yêu càu ghi rõ nội dung chuyển khoản là tên tài khoản bạn đã tạo trên web giaodichtrunggian,vn. Sau đó chụp lại hóa đơn chuyển khoản, dán ở dòng bên dưới và ấn “Gửi”</p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>
                                <div className="verticalSpaceMain">
                                    <Grid divided="vertically">
                                        <Grid.Row columns={2}>
                                            <Grid.Column width={4}>
                                                <label className="label">Hình ảnh</label>

                                            </Grid.Column>
                                            <Grid.Column width={12}>
                                                <label htmlFor="image"><FontAwesomeIcon icon={faPaperclip}/></label>
                                                <input 
                                                    // name="photo"
                                                    // value={photo}
                                                    // // ref={this.fileInput}
                                                    // // style={{display:"none"}}
                                                    className="inputMain" 
                                                    // type="file"
                                                    // accept=".jpg, .jpeg, .png"
                                                    // onChange={this.onChange}
                                                    type="file" 
                                                    name="file" 
                                                    onChange={this.onChangeFile}
                                                    />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    
                                    
                                </div>
                                <div className="spaceErrors">
                                    <span className="errors"> {errorMessage} </span>
                                </div>
                                <div className="btnWidth">
                                    <button type="submit" className="btnMain btnAddPoint">Gửi</button>
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