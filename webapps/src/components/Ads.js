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
                <p class="adText">  &#x20b9;{price} </p>
               

            </div>
        );
    }
}

export default Ads;