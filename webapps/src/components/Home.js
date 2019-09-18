import React, { Component } from 'react';
import ListOfAds from './ListOfAds';
import CreateNewAd from './CreateNewAd';
import {Row,Col} from 'react-bootstrap';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ads: [],
            isLoaded: false
        };
        this.fetchAds();
    }
              
    fetchAds = () => {
        console.log("fetchAdd called")
        fetch('http://localhost:8080/adMaker/allAds')
            .then(response => response.json())
            .then(result => {
                console.log("setting state in home called" + result.length);
                this.setState({
                    ads : result,
                    isLoaded: true
                })
console.log(this.state.ads);
            });
    }

    render() {
        return (
            <div>
                <br></br>
                <div class="container-fluid">
                 <Row>
                 <Col sm={3}>
                          <CreateNewAd refresh={this.fetchAds}></CreateNewAd>
                    </Col>
                 <Col sm={9}>
                             <ListOfAds init={this.state.ads}></ListOfAds>
                      </Col>
                 
                    
                 </Row>                    
             </div>
            </div>
            
        );
    }
}

export default Home;