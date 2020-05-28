import React, {Component} from 'react';
import { Grid, Button, Modal  } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

class Buy extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            transaction: [
                {
                    id: '1',
                    date: '20/12/2019',
                    point: '20',
                    comment: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    status: 'waiting'
                },
                {
                    id: '2',
                    date: '20/12/2019',
                    point: '20',
                    comment: 'simply dummy text of the printing and typesetting industry',
                    status: 'waiting'
                },
                {
                    id: '3',
                    date: '20/12/2019',
                    point: '20',
                    comment: 'simply dummy text of the printing and typesetting industry',
                    status: 'waiting'
                },
                {
                    id: '3',
                    date: '20/12/2019',
                    point: '20',
                    comment: 'simply dummy text of the printing and typesetting industry',
                    status: 'waiting'
                }, {
                    id: '3',
                    date: '20/12/2019',
                    point: '20',
                    comment: 'simply dummy text of the printing and typesetting industry',
                    status: 'waiting'
                }
            ]
        }
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
                                <p>{transaction.point}</p>
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