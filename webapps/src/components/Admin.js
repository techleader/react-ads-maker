import React, { PureComponent } from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Button,Row,Col } from 'react-bootstrap';
import CreateNewAd from './CreateNewAd';

class Admin extends PureComponent {
    render() {
        return (
            <Router>
                <div>
                    <br></br>
                    <Row>
                        <Col sm={12}>                               
                               <CreateNewAd></CreateNewAd>                             
                        </Col>
                    </Row>                
                   
                    
                </div>
              
            </Router>

        );
    }
}


export default Admin;