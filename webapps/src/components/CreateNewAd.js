import axios from 'axios';
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import App from '../App.css';
import { MDBRow, MDBCol, MDBCard, MDBInput, MDBBtn, MDBAnimation, MDBIcon } from "mdbreact";
import ImageUploder from './ImageUploder';
import image from '../image/bg12.jpg';
import { Redirect } from 'react-router-dom'

class CreateNewAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productName: "",
      price: "",
      image: {
        file: null,
        name: ""
      },
      logo: {
        file: null,
        name: ""
      },
      status: "",
      flag: "false",
      imageLabel: " Upload Your Image",
      logoLabel: " Upload Your Logo"
    }
    console.log("image name: " + this.state.image.name);
  }

  // {.......set selectd file..........}
  fileSelectHandler = (event) => {
    this.setState({
      [event.target.name]: {
        file: event.target.files[0],
        name: event.target.files[0].name
      }
    })
    if (event.target.name == "image") {
      this.state.imageLabel = event.target.files[0].name;
    } else {
      this.state.logoLabel = event.target.files[0].name;
    }
  }

  // {..............upload Image Handler..........}

  fileUploadHandler = () => {
    const formData = new FormData();
    formData.append('file', this.state.selectFile, this.state.selectFile.name);
    axios.post('http://localhost:8080/adelement/image/upload', formData, {

    })
      .then(res => {
        console.log(res);
      });

  }

  //{......set Ads Properties to state........}
  setAdPropertyToState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })

    console.log("image name : " + e.target.name + " = " + e.target.value);
  }

  //{.............save new Ad handler...........}  

  saveNewAdHandller = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productName', this.state.productName);
    formData.append('price', this.state.price);
    formData.append('image', this.state.image.file, this.state.image.name);
    formData.append('logo', this.state.logo.file, this.state.logo.name);
    axios.post('http://localhost:8080/adMaker/saveNewAds', formData)
      .then(respose => {
        this.setState({
          status: "Ads succesfully added",
        });
        this.props.refresh();
        this.state.productName="";
        this.state.price="";
       
      })
      .catch(error => {
        this.setState({
          status: "Unknown error while saving ad " + error,
        })
        console.log(error)
      });
  }


  render() {
    const color = "red";
    const { imageLabel, logoLabel } = this.state;
    return (
      <div>

        <MDBCard
          style={{
            backgroundImage:
              `url(${image})`,
            width: '100%', height: '39.9rem'
          }}>
          <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
            <div className='text-center'>
              <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                <strong>Create Your</strong>
                <a href='#!' className='green-text font-weight-bold'>
                  <strong> Ad</strong>
                </a>
              </h3>
            </div>

            <MDBInput
              label='Enter Product Name'
              type='text'
              style={{ color: 'white' }}
              labelClass='white-text'
              name="productName"
              value={this.state.productName}
              onChange={this.setAdPropertyToState}
            />
            <MDBInput
              label='Enter Product Price'
              type="number"
              min="0"
              style={{ color: 'white' }}
              labelClass='white-text'
              name="price"
              labelClass='white-text'
              value={this.state.price}
              onChange={this.setAdPropertyToState}
            />

            <MDBRow>

              <MDBCol sm={3}>
                <div style={{ display: "flex" }}>
                  <input
                    style={{ display: 'none' }}
                    type="file"
                    name="logo"

                    onChange={this.fileSelectHandler}
                    ref={input2 => this.input2 = input2}
                  />
                  <MDBAnimation type=" " infinite>
                    <MDBBtn size="sm" color="success"
                      variant="success" style={{ position: "absolute", marginLeft: "0.5px", marginTop: "36px" }}
                      onClick={() => this.input2.click()}>
                      Browse
                    </MDBBtn>

                  </MDBAnimation>
                </div>
              </MDBCol>
              <MDBCol sm={9}>
                <MDBInput label={logoLabel} labelClass='white-text' disabled type="text" />
              </MDBCol>

            </MDBRow>
            <MDBRow>

              <MDBCol sm={3}>
                <div style={{ display: "flex" }}>
                  <input
                    style={{ display: 'none' }}
                    type="file"
                    name="image"
                    onChange={this.fileSelectHandler}
                    ref={input1 => this.input1 = input1}
                  />
                  <MDBAnimation type="" infinite>
                    <MDBBtn size="sm" color="success"
                      variant="success" style={{ position: "absolute", marginLeft: "0.5px", marginTop: "36px" }}
                      onClick={() => this.input1.click()}>Browse
                      </MDBBtn>

                  </MDBAnimation>


                </div>
              </MDBCol>
              <MDBCol sm={9} >
                <MDBInput label={imageLabel} labelClass='white-text' disabled type="text" />
              </MDBCol>

            </MDBRow>




            {/* <div class="inline">
                <div class="text-align ">image</div>
                <MDBInput  name="logo"
                  type='file' 
                  style={{color: 'white'}}
                  onChange={this.fileSelectHandler}
                  accept="image/*" />
              
               <div class="text-align">Logo</div>  
                <MDBInput name='image'
                  type='file'
                  style={{color: 'white'}}
                  onChange={this.fileSelectHandler}
                  accept="image/*" />
              </div> */}


            <MDBRow className='d-flex align-items-center mb-4'  >
              <MDBCol md='12' >
                <div className='text-center '>
                  <MDBBtn gradient="peach"
                    type="submit"
                    style={{ marginTop: "36px" }}
                    className='btn-block z-depth-1'
                    onClick={this.saveNewAdHandller}
                  >
                    Save Ads
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBCol md='12'>
              <p className='font-small white-text d-flex justify-content-end'>
                <h1 class="statusText"> {this.state.status}</h1>
              </p>
            </MDBCol>
          </div>
        </MDBCard>

      </div>
    );
  }

}
export default CreateNewAdd;