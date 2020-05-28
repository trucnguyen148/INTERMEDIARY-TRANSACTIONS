import React, {Component} from 'react';
import { Grid  } from 'semantic-ui-react';


class HistoryPoint extends Component{
    constructor(props){
        super(props);
        this.state = {
            transaction: [
                {
                    date: '20/12/2019',
                    amount: '2.000.000',
                    bank: "Techcombank",
                    bankAccount: "080xxxxxxx",
                    img: "",
                    status: 'waiting'
                },
                {
                    date: '20/12/2019',
                    amount: '2.000.000',
                    bank: "Techcombank",
                    bankAccount: "080xxxxxxx",
                    img: "",
                    status: 'waiting'
                },
                {
                    date: '20/12/2019',
                    amount: '2.000.000',
                    bank: "Techcombank",
                    bankAccount: "080xxxxxxx",
                    img: "",
                    status: 'waiting'
                },
                {
                    date: '20/12/2019',
                    amount: '2.000.000',
                    bank: "Techcombank",
                    bankAccount: "080xxxxxxx",
                    img: "",
                    status: 'waiting'
                }, 
                {
                    date: '20/12/2019',
                    amount: '2.000.000',
                    bank: "Techcombank",
                    bankAccount: "080xxxxxxx",
                    img: "",
                    status: 'waiting'
                }
            ]
        }
    }


    render(){

        return(
            <div>
                {/* Title */}
                <div className="titleDetailAccount">
                <Grid divided="vertically">
                    <Grid.Row columns={6}>
                        <Grid.Column width={2}>
                            <h4>Ngày</h4>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <h5>Số tiền</h5>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h5>Ngân hàng</h5>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h5>Số tài khoản</h5>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h5>Hình ảnh</h5>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h5>Tình trạng</h5>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
                
             
                {/* Content */}
                <Grid divided="vertically">
                    <Grid.Row columns={6} >
                        {this.state.transaction.map((transaction, index) =>
                            <>
                            <Grid.Column width={2}>
                                <p className="lineCenter">{transaction.date}</p>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <p className="lineCenter">{transaction.amount}</p>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <p>{transaction.bank}</p>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <p>{transaction.bankAccount}</p>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <p>{transaction.img}</p>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <p>{transaction.status}</p>
                                
                            </Grid.Column>
                            <hr className="divider dividerBottom"/>
                            </>
                        )}
                        
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default HistoryPoint