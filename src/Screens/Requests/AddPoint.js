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
            file: null,
            fileBase64: "",
            errorMessage: ""
            
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
    }
    
    onChangeFile(e){
        e.preventDefault();
        
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.setState({
            file: file,
            fileBase64: reader.result
          });          
        };

        const validInput = this.state.file !== null ;

        if(validInput){
            this.setState({
                errorMessage: ""
            })
        };
    }
 
    onChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })

        const validInput = this.state.amount !== null ;

        if(validInput){
            this.setState({
                errorMessage: ""
            })
        }
        
    };

    onSubmit(e){
        e.preventDefault();
        
        const url = sessionURL + "points";
        const {amount, file, fileBase64} = this.state;
        const validInput = amount !== "" && file !== "";

        console.log(amount);
        console.log(fileBase64);

        if(validInput){
            axios.post(url, 
                {
                    amount: amount,
                    image :  fileBase64.replace("data:image/jpeg;base64,", "")
                },
                {
                    headers: header
                }
            )
            .then(response => { 
                alert("Bạn đã gửi yêu cầu nạp điểm thành công");
                console.log(response)
            })
            .catch(err => {
                alert("Yêu cầu nạp điểm thất bại. Vui lòng kiểm tra lại các thông tin");
                console.log(err.response)
            });
        } else{
            this.setState({
                errorMessage: "Bạn vui lòng điền đầy đủ các thông tin"
            })
        }
    }
    
    render(){
        const {amount, errorMessage } = this.state;

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
                                                   
                                                    className="inputMain" 
                                                    
                                                    accept=".jpg, .jpeg, .png"
                                                    
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