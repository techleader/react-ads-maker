import React, { Component } from 'react';
import App from '../App.css';

class Ads extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ads: this.props.value
        }
    }
    render() {
        const { productName, price, logo, image } = this.state.ads;
        const url = 'http://localhost:8080///adelement/images/';
        return (
            <div>

                <img src={url + image} width="100%" height="300px"></img>
                <p class="text"> {productName} </p>
                <p class="text">${price}</p>

                {/* <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={url+ads.image} weight="200px" height="200px" />
                                <Card.Body>
                                    
                                    <Card.Text>
                                    <p> {ads.productName} ${ads.price}</p>
                                    </Card.Text>
                                    <Button variant="primary">shop now</Button>
                                </Card.Body>
                                </Card> 
                                */}

            </div>
        );
    }
}

export default Ads;