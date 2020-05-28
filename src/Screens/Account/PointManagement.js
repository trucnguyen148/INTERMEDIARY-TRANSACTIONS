import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

import pointManagement from './../../assets/pointManagement.png';

class PointManagement extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){
        return(
            <div className="container">
                <Grid divided="vertically">
                    <Grid.Row columns={2}>
                        <Grid.Column width={7}>
                            <div className="centerMain">
                                <img src={pointManagement} alt="" className="imgAccount"/>
                            </div>
                            
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <div className="centerMain">
                                <h1 className="titleAccount">Tổng điểm</h1>
                                <p className="point">69</p>
                                <button className="btnAccount">Bạn muốn rút tiền?</button>
                            </div>
                            

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default PointManagement