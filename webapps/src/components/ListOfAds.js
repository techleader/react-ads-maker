import { MDBAnimation, MDBCard, MDBCol, MDBRow } from "mdbreact";
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { TiArrowLeftOutline } from "react-icons/ti";
import Ads from './Ads';

class ListOfAds extends Component {

    render() {
        const url = 'http://localhost:8080///adelement/images/';
        var icon = <TiArrowLeftOutline size={100}></TiArrowLeftOutline>;
        var createAdFirstMessage = "";
        var carouselView = "";
        var listView = "";
        var adsList = this.props.init;
        if (adsList.length == 0) {
            createAdFirstMessage = <div class="text ">
                you don't have ad,
                 please create Ad first
                <MDBAnimation type="shake slow" infinite>
                    <div>{icon}</div>
                </MDBAnimation>
            </div>
        }
        if (adsList.length >= 1) {
            carouselView =
                <div class="background">>
                    <Row>
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
                                                                    <img src={url + ads.logo} width="80px" height="80px" ></img>
                                                                </div>
                                                            </MDBAnimation>
                                                            <img className="d-block w-100" src={url + ads.image} width="200px" height="450px"></img>
                                                        </MDBAnimation>
                                                    </Col>
                                                    <Col sm={3} style={{ marginTop: '10%' }}>
                                                        <MDBAnimation type="bounceInUp slow" >
                                                            <p class="back bottom-left" > {ads.productName}<p> <b>&#x20b9;{ads.price}</b></p></p>
                                                            <MDBAnimation type="rubberBand " infinite>
                                                                <button type="button" size="lg" class="btn btn-outline-success btn-rounded waves-effect">
                                                                    <TiArrowLeftOutline size={40} color="green"></TiArrowLeftOutline>
                                                                    Shop now
                                                                </button>
                                                            </MDBAnimation>
                                                        </MDBAnimation>
                                                        <Carousel.Caption>
                                                           
                                                        </Carousel.Caption>
                                                    </Col>
                                                </Row>
                                            </Carousel.Item>
                                        )}
                                   
                                </Carousel>
                            </div>
                        </Col>
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