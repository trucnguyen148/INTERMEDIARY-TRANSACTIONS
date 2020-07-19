import React, {Component} from 'react';
import { Grid, Pagination, Modal  } from 'semantic-ui-react';
import axios from 'axios';
import { sessionURL } from '../../../Routes/sessionURL';
import { header } from '../../../Routes/headers';


class HistoryPoint extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: "",
            transactions: [],
            page: 1
        }
        this.setPageNum = this.setPageNum.bind(this);
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
                    transactions: result.data.data,
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
    
    setPageNum(event, { activePage }){
        this.setState({ page: activePage });
    };

    render(){
        const { transactions, page } = this.state;
        const itemsPerPage = 10;
        const totalPages = transactions.length / itemsPerPage ;
        const items = transactions.slice(
            (page - 1) * itemsPerPage,
            (page - 1) * itemsPerPage + itemsPerPage
        );
        

        return(
            <div>
                {/* Title */}
                <div className="titleDetailAccount">
                <Grid divided="vertically">
                    <Grid.Row columns={6}>
                        <Grid.Column width={3}>
                            <h4>Ngày</h4>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <h5>Số tiền</h5>
                        </Grid.Column>
                        
                        <Grid.Column width={6}>
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
                    
                        {items.sort((a, b) => (b.created_at - a.created_at)).map((transaction, index) =>
                            <>
                            <Grid.Row columns={6} key={transaction.id} style={{display: 'flex', alignItems: 'center'}}>
                                <Grid.Column width={3}>
                                    <p className="lineCenter">{transaction.created_at}</p>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <p className="lineCenter">{transaction.amount}</p>
                                </Grid.Column>
                                
                                <Grid.Column width={6}>
                                    <Modal trigger={<img src={transaction.image_url} alt=""/>}>
                                        <Modal.Content >
                                            <img src={transaction.image_url} alt=""/>
                                        </Modal.Content>
                                    </Modal>
                                    
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <p>{transaction.status}</p>
                                    
                                </Grid.Column>
                            </Grid.Row>
                            </>
                        )}
                        
                    
                </Grid>
                <Pagination
                    activePage={page}
                    totalPages={totalPages}
                    siblingRange={1}
                    onPageChange={this.setPageNum}
                />
            </div>
        )
    }
}

export default HistoryPoint