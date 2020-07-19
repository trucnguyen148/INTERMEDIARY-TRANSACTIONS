import React, { Component } from 'react';
import { Grid, Button, Modal, Pagination } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { sessionURL } from '../../../Routes/sessionURL';
import axios from 'axios';
import { header } from '../../../Routes/headers';

class Sale extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            loading: true,
            error: "",
            transactions: [],
            newTransactions: "",
            user: [],
            page: 1
        }
        this.handleAccept = this.handleAccept.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.setPageNum = this.setPageNum.bind(this);

    }

    close = () => this.setState({ open: false });

    loadData(){
        this.setState({loading: true});
        const url = sessionURL + "deals"
        return  axios
        .get(url, {
            headers: header
        })
        .then(result => {
            this.setState({
                transactions: result.data.data,
                loading: false,
                error: false
            });
        })
        .catch(error => {
            console.error("error: ", error);
            this.setState({
                error: `${error}`,
                loading: false
            });
        });
    };

    loadUser = () => {
        this.setState({loading: true});
        const url = sessionURL + "profile";
        return axios
        .get(url, {
            headers: header
        })
        .then(result => {
            console.log(result);
            this.setState({
                user: result.data.data,
                loading: false,
                error: false
            });
        })
        .catch(error => {
            console.error("error: ", error);
            this.setState({
                error: `${error}`,
                loading: false
            });
        })
    };

    componentDidMount(){
        this.loadData();
        this.loadUser();
    }

    handleShow(transaction){
        this.setState({
            newTransactions:transaction}, 
            () => this.setState({ open: true }));
    }

    handleCancel(id){
        const url = sessionURL + "deals";
        
        console.log(id);

        axios.put(url, 
            {
                deal_id: id,
                action: "CANCEL"
            },
            {
                headers: header
            })
            .then(response => { 
                window.location.reload();
                alert("sucess");
                // this.setState({transaction: response})
                console.log(response)
            })
            .catch(err => {
                alert("FAIL");
                this.setState({errorMessage: err.message
                });
                console.log(err.response)
            });
        this.setState({ open: false });
    };

    handleAccept(id){
        const url = sessionURL + "deals";
        
        console.log(id)
        
        axios.put(url, 
            {
                deal_id: id,
                action: "CONFIRMED"
            },
            {
                headers: header
            })
            .then(response => { 
                window.location.reload();
                alert("sucess");
                console.log(response)
            })
            .catch(err => {
                alert("FAIL");
                this.setState({errorMessage: err.message
                });
                console.log(err.response)
            });
        this.setState({ open: false })
    }


    setPageNum(event, { activePage }){
        this.setState({ page: activePage });
      };
    close = () => this.setState({ open: false })


    render(){
        const { open, newTransactions, transactions, user } = this.state;
        const showTransactions = [];
        const itemsPerPage = 10;
        const { page } = this.state;
        
        transactions.sort((a, b) => (b.created_at - a.created_at)).map(transaction => {
            return transaction.owner_id !== user.id
                ? showTransactions.push(transaction)
                : null
        });

        const totalPages = showTransactions.length /10 ;
        const items = showTransactions.slice(
            (page - 1) * itemsPerPage,
            (page - 1) * itemsPerPage + itemsPerPage
        );
      
        return(
            <div>
                {/* Title */}
                <div className="titleDetailAccount">
                <Grid divided="vertically">
                    <Grid.Row columns={6}>
                        <Grid.Column width={2}>
                            <h4>Ngày</h4>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h5>Người gửi</h5>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <h5>Điểm</h5>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <h5>Thỏa thuận giao dịch</h5>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h5>Tình trạng</h5>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
                <Grid >
                {items.map(transaction => 
                    <Grid.Row columns={6} key={transaction.id}>
                             <Grid.Column width={2}>
                             <p className="lineCenter">{new Intl.DateTimeFormat("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric"}).format(transaction.created_at)}
                            </p>
                            </Grid.Column>
                             <Grid.Column width={3}>
                                 <p className="lineCenter">{transaction.owner_name}</p>
                             </Grid.Column>
                                 <Grid.Column width={2}>
                                     <p>{transaction.points}</p>
                                 </Grid.Column>
                                 <Grid.Column width={5}>
                                     <p>{transaction.comment}</p>
                                 </Grid.Column>
                                 <Grid.Column width={3}>
                                    <p>{transaction.status} </p>
                                 </Grid.Column>
                   
                            {transaction.status === "CANCEL" || transaction.status === "PARTNER_CONFIRMED"
                                ? null
                                : <Grid.Column width={1}>
                                    <button className="IconBtn" onClick={() => this.handleShow(transaction)}><FontAwesomeIcon icon={faEllipsisV} className="ellipIcon"/></button>
                                </Grid.Column>
                            }

                            <Modal 
                                open={open}
                                onClose={this.close}
                            >
                                <Modal.Header>Bạn xác nhận kết thúc giao dịch và đồng ý chuyển điểm cho bên đối tác chứ?</Modal.Header>
                                <Modal.Actions>
                                    <Button color='black' onClick={() => this.handleCancel(newTransactions.id)}>
                                    Hủy
                                    </Button>
                                    <Button color='black' onClick={() => this.handleAccept(newTransactions.id)} type="submit">
                                    Đồng ý
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                       
                       <hr className="divider dividerBottom"/>
              
                    </Grid.Row>      
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

export default Sale