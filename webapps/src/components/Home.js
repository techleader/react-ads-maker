import React, { Component } from 'react';
import ListOfAds from './ListOfAds';
import {Row,Col} from 'react-bootstrap';


class Home extends Component {
    
    render() {
        return (
            <div>
                <br></br>
                <div >                 
                 <Row >
                      <Col > 
                             <ListOfAds></ListOfAds>
                      </Col>
                 </Row>                    
             </div>
            </div>
            
        );
    }
}

export default Home;