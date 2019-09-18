import React, { Component } from 'react';
import App from '../App.css';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Ads from './Ads';
import Carousel from 'react-bootstrap/Carousel'
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBAnimation, MDBCardBody, MDBCardImage, MDBCardTitle, MDBBtn } from "mdbreact";
import { TiArrowLeftOutline, TiArrowRightOutline, TiArrowForward } from "react-icons/ti";

class ListOfAds extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        const url = 'http://localhost:8080///adelement/images/';
        var icon = <TiArrowLeftOutline></TiArrowLeftOutline>;
        var createAdFirstMessage = "";
        var carouselView = "";
        var listView = "";
        var adsList = this.props.init;
        if (adsList.length == 0) {
            createAdFirstMessage = <div class="text ">
                you don't have ad,
                 please create Ad first
           <div>{icon}</div>
            </div>
        }
        if (adsList.length >= 2) {
            carouselView =
                <div class="background">>
                    <Row>
                        {/* <Col sm={3} >
                            <h1 class="bottom-left-text text-bg">
                                <MDBAnimation type="shake slow" infinite>
                                    Your Ads
                            <TiArrowRightOutline size={70} color="FF5733"></TiArrowRightOutline>
                                </MDBAnimation>

                            </h1> </Col> */}
                        <Col sm={12} >
                            <div class="">
                                <Carousel>
                                    {
                                        adsList.map(ads =>

                                            <Carousel.Item>
                                                <Row>
                                                    <Col sm={2}></Col>
                                                    <Col sm={6}>
                                                        <MDBAnimation type="lightSpeedIn" >
                                                            <MDBAnimation type="bounceInDown slow" >
                                                                <div class="top-left">
                                                                    <img src={url + ads.logo} width="80px" height="80px" class="avatar"></img>
                                                                </div>
                                                            </MDBAnimation>
                                                            <img className="d-block w-100" src={url + ads.image} width="200px" height="450px"></img>
                                                        </MDBAnimation>

                                                    </Col>
                                                    <Col sm={3} style={{ marginTop: '10%' }}>
                                                    <MDBAnimation type="bounceInUp slow" >
                                                        <p class="back bottom-left" > {ads.productName}<p> <b>&#x20b9;{ads.price}</b></p></p>
                                                        <MDBAnimation type="rubberBand "  infinite>
                                                        <button type="button" size="lg"class="btn btn-outline-success btn-rounded waves-effect">                                                     
                                                        <TiArrowLeftOutline size={40} color="green"></TiArrowLeftOutline>
                                                            Shop now
                                                            
                                                               
                                                            
                                                        </button>
                                                        </MDBAnimation>
                                                        </MDBAnimation>
                                                        <Carousel.Caption>
                                                            <MDBAnimation type="bounceInDown slow" >

                                                            </MDBAnimation>

                                                        </Carousel.Caption>
                                                    </Col>
                                                </Row>
                                            </Carousel.Item>

                                        )}
                                    <br></br>
                                </Carousel>
                            </div>
                        </Col>
                        {/* <Col sm={3} >
                         <h1 class="bottom-left-text ">
                                <MDBAnimation type="pulse " infinite>
                                 
                                    <MDBBtn  color="success">Shop Now</MDBBtn>
                                </MDBAnimation>

                            </h1>
                        </Col> */}
                    </Row>
                </div>
        }
        if (adsList.length > 0) {
            listView =
                <div class="background">
                <br></br>
                    <div>
                        <MDBRow>
                            {
                                adsList.map(ads =>
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
        }

        return (
            <div>
                {createAdFirstMessage}
                {carouselView}
                {listView}
            </div>
        );
    }
}

export default ListOfAds;