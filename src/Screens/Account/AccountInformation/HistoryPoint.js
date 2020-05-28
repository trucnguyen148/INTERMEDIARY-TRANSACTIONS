import React, {Component} from 'react';
import { Grid  } from 'semantic-ui-react';
import axios from 'axios';
import { sessionURL } from '../../../Routes/sessionURL';
import { header } from '../../../Routes/headers';


class HistoryPoint extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: "",
            transaction: []
        }
    }

    loadData = () => {
        this.setState({loading: true});
        const url = sessionURL + "points"
        return axios 
            .get(url, {
                headers: header
            })
            .then(result => {
                console.log(result);
                this.setState({
                    transaction: result.data.data,
                    loading: false,
                    error: false
                });
            })
            .catch(error => {
                console.log("error: " , error);
                this.setState({
                    error: `${error}`,
                    loading: false
                });
            })
    }

    componentDidMount(){
        this.loadData();
    }

    render(){
        const { loading, error, transaction } = this.state;
        if (loading) {
        return <p>Loading ...</p>;
        }
        if (error) {
        return (
            <p>
            There was an error loading the repos.{" "}
            <button onClick={this.loadData}>Try again for Deals</button>
            <button onClick={this.loadCompany}>Try again for customerExperiences</button>
            </p>
        );
        }

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
                                {/* <p className="lineCenter">{transaction.date}</p> */}
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
                                <p>{transaction.image_url}</p>
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