import React, {Component} from 'react';
import { Grid, Button, Modal  } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { sessionURL } from '../../../Routes/sessionURL';
import axios from 'axios';
import { header } from '../../../Routes/headers';

class Buy extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            loading: true,
            error: "",
            transaction: []
        }
    }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    loadData = () => {
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

    componentDidMount(){
        this.loadData();
    }
    
    render(){
        const { open, dimmer } = this.state;

        return(
            <div>
                {/* Title */}
                <div className="titleDetailAccount">
                <Grid divided="vertically">
                    <Grid.Row columns={6}>
                        <Grid.Column width={2}>
                            <h4>Mã số</h4>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h5>Ngày</h5>
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
                    <Grid.Row columns={6} >
                        {this.state.transaction.map((transaction, index) =>
                            <>
                            <Grid.Column width={2}>
                                <p className="lineCenter">{transaction.id}</p>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <p className="lineCenter">{transaction.date}</p>
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
                                    <Modal.Header>Bạn muốn hủy giao dịch?</Modal.Header>
                                    <Modal.Actions>
                                        <Button color='black' onClick={this.close}>
                                        Không
                                        </Button>
                                        <Button
                                        positive
                                        
                                        content="Vâng"
                                        onClick={this.close}
                                        />
                                    </Modal.Actions>
                                </Modal>
                                
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

export default Buy