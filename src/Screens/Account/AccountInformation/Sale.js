import React, {Component} from 'react';
import { Grid, Button, Modal } from 'semantic-ui-react';
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
            transaction: [],
            action: ""
        }
        this.handleAccept = this.handleAccept.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    loadData(){
        this.setState({loading: true});
        const url = sessionURL + "deals"
        return  axios
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
            console.error("error: ", error);
            this.setState({
                error: `${error}`,
                loading: false
            });
        });
    };

    handleCancel(){
        const url = sessionURL + "deals"
        axios.put(url, 
            {
                deal_id: this.state.transaction.id,
                action: "CANCEL"
            },
            {
                headers: header
            }
            
            )
            .then(response => { 
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
    };

    handleAccept(){
        const url = sessionURL + "deals"
        axios.put(url, 
            {
                deal_id: this.state.transaction.id,
                action: "COMPLETE"
            },
            {
                headers: header
            },
            
            )
            .then(response => { 
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

    componentDidMount(){
        this.loadData();
    }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render(){
        const { open, dimmer } = this.state;

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
                
             
                {/* Content */}
                <Grid divided="vertically">
                {this.state.transaction.map((transaction) =>
                    <>
                    <Grid.Row columns={6} key={transaction.id}>
                    <Grid.Column width={2}>
                        <p className="lineCenter">{transaction.created_at}</p>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <p className="lineCenter">{transaction.partner_name}</p>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <p>{transaction.points}</p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <p>{transaction.comment}</p>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <p>{transaction.status}</p>
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <button onClick={this.show('blurring')}>
                        <FontAwesomeIcon icon={faEllipsisV}/>
                        </button>
                        <Modal dimmer={dimmer} open={open} onClose={this.close}>
                            <Modal.Header>Bạn xác nhận kết thúc giao dịch và đồng ý chuyển điểm cho bên đối tác chứ?</Modal.Header>
                            <Modal.Actions>
                                <Button color='red' onClick={this.handleCancel}>
                                Hủy bỏ
                                </Button>
                                <Button color='black' onClick={this.handleAccept}>
                                Đồng ý
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </Grid.Column>
                    <hr className="divider dividerBottom"/>
                    </Grid.Row>
                    </>
                )}
                </Grid>
            </div>
        )
    }
}

export default Sale