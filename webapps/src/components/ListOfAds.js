import React, { Component } from 'react';
import App from '../App.css';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Ads from './Ads';
import Carousel from 'react-bootstrap/Carousel'
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBAnimation,MDBCardBody,MDBCardImage,MDBCardTitle,MDBBtn } from "mdbreact";


class ListOfAds extends Component {
    constructor() {
        super()
        this.state = {
            ads: [],
            isLoaded: false,

        }
        this.fetchAds();

    }

    fetchAds = () => {
        fetch('http://localhost:8080/adMaker/allAds')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    ads: result,
                    isLoaded: true
                })

            });
    }
    render() {
        const url = 'http://localhost:8080///adelement/images/';
        return (
            <div class="container border">
                <div class=" ">
                    <Row>
                        <Col sm={3} >
                        
                        </Col>

                        <Col sm={6} >
                            <div class="carousel">
                                <Carousel   >
                                    {
                                        this.state.ads.map(ads =>

                                            <Carousel.Item>
                                                <img className="d-block w-100" src={url + ads.image} width="200px" height="450px"></img>
                                                <div class="top-left">
                                                    <img src={url + ads.logo} width="80px" height="80px" class="avatar"></img>
                                                </div>
                                                <Carousel.Caption>
                                                 
                                                        <p class="back bottom-left" > {ads.productName}, &#x20b9;{ads.price}
                                                        </p>
                                                        {/* <MDBAnimation type="pulse" infinite>
                                                            <div > <button type="button" class="btn btn-success">Shop Now</button> </div>
                                                        </MDBAnimation> */}
                                                   
                                                </Carousel.Caption>
                                            </Carousel.Item>


                                        )}

                                </Carousel>
                            </div>
                        </Col>
                        <Col sm={3} class="bottom-right">  </Col>

                    </Row>
                </div>
                <br></br>
                <div>

                    <MDBRow>
                        {
                            this.state.ads.map(ads =>
                                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                                    <MDBCard collection className="z-depth-1-half">
                                        <div className="view zoom">
                                            <Ads value={ads}></Ads>

                                        </div>
                                    </MDBCard>
                                </MDBCol>


                            )
                        }
                    </MDBRow>
                </div>
            </div>
        );
    }
}

export default ListOfAds;