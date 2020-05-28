import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import aboutUs from './../assets/aboutUs.png'

class AboutUs extends Component{
    render(){
        return(
            <div className="subContainer ">
                <Grid divided="vertically">
                    <Grid.Row columns={2}>
                        <Grid.Column width={7}>
                            <div className="sameRow marginLeft" style={{marginTop: '10rem'}}>
                                <FontAwesomeIcon icon={faUser} size="lg" className="iconSpace"/>
                                <p>LÊ TRỌNG NGHĨA</p>
                            </div>
                            <div className="sameRow marginLeft"> 
                                <FontAwesomeIcon icon={faPhone} size="lg" className="iconSpace"/>
                                <p>096 165 1094</p>
                            </div>
                            <div className="sameRow marginLeft">
                                <FontAwesomeIcon icon={faFacebook} size="lg" className="iconSpace"/>
                                <p>
                                    xxxx
                                </p>
                            </div>
                            <div className="sameRow marginLeft">
                                <FontAwesomeIcon icon={faEnvelope} size="lg" className="iconSpace"/>
                                <p>justpassion68@gmail.com</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <img src={aboutUs} alt="" style={{width: '70%', float: 'right'}}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default AboutUs