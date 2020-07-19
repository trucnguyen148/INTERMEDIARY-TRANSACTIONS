import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

import pointManagement from './../../assets/pointManagement.png';
import { sessionURL } from '../../Routes/sessionURL';
import axios from 'axios';
import { header } from '../../Routes/headers';
import history from '../../Routes/history';

class PointManagement extends Component{
    constructor(props){
        super(props);
        this.state={
            points: [],
            successPoints: [],
            loading: true,
            error: "",
            amountToTal: "",
            profile: []
        }

    }

    loadData = () => {
        this.setState({loading: true});
        const url = sessionURL + "profile";
        return axios
        .get(url, {
            headers: header
        })
        .then(result => {
            console.log(result);
            this.setState({
                profile: result.data.data,
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
        // const url = sessionURL + "points";
        // return axios
        // .get(url, {
        //     headers: header
        // })
        // .then(result => {
        //     console.log(result);
        //     this.setState({
        //         points: result.data.data,
        //         loading: false,
        //         error: false
        //     });

        //     // Get data only from Success status
        //     {this.state.points.map(point => {
        //         return point.status === "SUCCESS"
        //             ? this.state.successPoints.push(point.amount)
        //             : null
        //     })}

        //     // Calculate SUM
        //     this.setState({
        //         amountToTal : this.state.successPoints.reduce((a,b) => a + b, 0)
        //     })
            
        //     console.log(this.state.successPoints);
        //     console.log(this.state.amountToTal)
        // })
        // .catch(error => {
        //     console.error("error: ", error);
        //     this.setState({
        //         error: `${error}`,
        //         loading: false
        //     });
        // })
    };


    componentDidMount(){
        this.loadData();
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
                                <p className="point">{this.state.profile.points}</p>
                                {/* <p className="point">{this.state.amountToTal}</p> */}
                                <button className="btnAccount" onClick={()=> history.push("/takemoney")}>Bạn muốn rút tiền?</button>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default PointManagement