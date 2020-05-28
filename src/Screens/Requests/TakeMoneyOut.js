import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

import takeMoney from './../../assets/TakeMoney.png';

import "./../../styles/Main.scss";

class TakeMoneyOut extends Component{
    constructor(props){
        super(props);
        this.state = {
            amount: "",
            bankDetail: {
                name: "",
                bankAccount: "",
                bank: "",
                branch: ""
            },
            selectedButton: null,
            bank: [
                {
                    name: "Bui Thao Trang",
                    bankAccount: "008xxxxxxxx",
                    bank: "Techcombank",
                    branch: "Ho Chi Minh"
                },
                {
                    name: "Bui Thao Trang",
                    bankAccount: "008xxxxxxxx",
                    bank: "Techcombank",
                    branch: "Ho Chi Minh"
                },
                {
                    name: "Bui Thao Trang",
                    bankAccount: "008xxxxxxxx",
                    bank: "Techcombank",
                    branch: "Ho Chi Minh"
                }
            ]
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);  
        this.handleClick = this.handleClick.bind(this);      
    }

    handleClick(e){
        // alert("Clickme");
        
    }

    buttonSelected = selectedButton => ev => {
        this.setState({ selectedButton })
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        console.log(e.target.value);
    }

    render(){
        const {amount, bankDetail} = this.state;
        return(
           <Grid divided="vertically">
               <Grid.Row columns={2}>
                   <Grid.Column width={6}>
                       <div className="centerMain">
                           <img src={takeMoney} className="imgMain" alt=" icon of Take money out"/>
                       </div>

                   </Grid.Column>
                   <Grid.Column width={1}>
                       <div className="centerMain">
                           <div className="verticalLineMain">

                           </div>
                       </div>
                   </Grid.Column>
                   <Grid.Column width={9}>
                       <div className="space">
                           <form className="formMain formPoint" onSubmit={this.onSubmit}>
                               <div className="verticalSpaceMain titleMain addPoint">
                                   <h1>Rút tiền</h1>
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
                                    <label>Chọn tài khoản</label>
                                    <div className="account">
                                        <Grid divided="vertically">
                                            <Grid.Row columns={3}>
                                                {this.state.bank.map((bank, index) =>
                                                     <Grid.Column width={5}>
                                                        <button 
                                                            className={index === this.state.selectedButton ? 'selected' : 'borderAccount'}
                                                            type="button"
                                                            key={index}
                                                            onClick={this.buttonSelected(index)}
                                                        >
                                                           
                                                        <h5 
                                                            name="name" 
                                                            value={bankDetail.name}
                                                        >
                                                            {bank.name}
                                                        </h5>
                                                        {/* {console.log(this.state.bankDetail.name)} */}
                                                        <p 
                                                            name="bankAccount"
                                                            value={bankDetail.bankAccount}
                                                        >
                                                            {bank.bankAccount}
                                                        </p>
                                                        <p
                                                            name="bank"
                                                            value={bankDetail.bank}
                                                        >
                                                            {bank.bank}
                                                        </p>
                                                        <p
                                                            name="branch"
                                                            value={bankDetail.branch}
                                                        >
                                                            Chi nhánh: {bank.branch}
                                                        </p>
                                                        </button>
                                                    </Grid.Column>
                                                )}
                                            </Grid.Row>
                                        </Grid>
                                    </div>
                               </div>
                               <div className="btnWidth">
                                    <button type="submit" className="btnMain btnAddPoint">xác nhận</button>
                                </div>
                           </form>
                       </div>
                   </Grid.Column>
               </Grid.Row>
           </Grid>
        )
    }
}

export default TakeMoneyOut