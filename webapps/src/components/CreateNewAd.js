import axios from 'axios';
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBInput, MDBBtn } from "mdbreact";
import ImageUploder from './ImageUploder';

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
      flag: "false"
    }
  }


  // {.......set selectd file..........}
  fileSelectHandler=(event) =>{
    this.setState({
        [event.target.name] : {file:event.target.files[0],
                              name:event.target.files[0].name }
    })
    console.log(" file name : "+event.target.files[0].name);
}

// {..............upload Image Handler..........}

fileUploadHandler=()=>{
    const formData = new FormData();
    formData.append('file',this.state.selectFile,this.state.selectFile.name);
    axios.post('http://localhost:8080/adelement/image/upload',formData,{

    })
    .then(res=>{
       console.log(res); 
    });
    
}

//{......set Ads Properties to state........}
  setAdPropertyToState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,


    })
    console.log("name : " + e.target.name + " = " + e.target.value);
  }

  //{.............save new Ad handler...........}  

  saveNewAdHandller = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productName',this.state.productName);
    formData.append('price',this.state.price);
    formData.append('image',this.state.image.file,this.state.image.name);
    formData.append('logo',this.state.logo.file,this.state.logo.name);
    axios.post('http://localhost:8080/adMaker/saveNewAds',formData)
      .then(respose => {
        this.setState({
          status: "Ads succesfully added",
        })
      })
      .catch(error => {
        console.log("error aa gi " + error)
      })
  }
  // saveNewAdHandller = (e) => {
  //   e.preventDefault()
  //   axios.get('http://localhost:8080/adMaker/saveNewAd?productName=' + this.state.productName + '&price=' + this.state.price +
  //     '&image=' + this.state.image + '&logo=' + this.state.logo)
  //     .then(respose => {
  //       this.setState({
  //         status: "Ads succesfully added",
  //       })
  //     })
  //     .catch(error => {
  //       console.log("error aa gi " + error)
  //     })
  // }

  render() {

    return (
      <div >
        {/* <Row>
          <Col sm={12}>
            <div class="border">
              <form >
                <h1>Create Your ADD</h1>
               Product Name:<input type="text" name="trainNumber" value={this.state.trainNumber} onChange={this.setTrainToState}></input><br></br><br></br>
                Prize:<input type="text" name="trainName" value={this.state.trainName} onChange={this.setTrainToState}></input><br></br><br></br>
                Upload Image:<input type="text" name="startStation" value={this.state.startStation} onChange={this.setTrainToState}></input><br></br><br></br>
                Logo:<input type="text" name="endStation" value={this.state.endStation} onChange={this.setTrainToState}></input><br></br><br></br>
                <Button type="submit" onClick={this.addNewTrainHandller} variant="success">Submit </Button>
                <div class="alert alert-primary" role="alert"> <h2> {this.state.status}</h2></div>
              </form>
            </div>
          </Col>
        </Row> */}
        <MDBContainer>
          <MDBRow>
            <MDBCol md='11'>
              <MDBCard className='card-image' style={{
                backgroundImage:
                  'url(http://localhost:8080///adelement/images/bg12.jpg)',
                width: '70%', height: '39rem'
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
                  <MDBInput label='Product Name' grouptype='file' validate labelClass='white-text'
                    name="productName" value={this.state.productName} onChange={this.setAdPropertyToState}
                  />
                  <MDBInput label='product Price' grouptype='text' validate labelClass='white-text'
                    name="price" value={this.state.price} onChange={this.setAdPropertyToState}
                  />
                   
                   <MDBRow>
                     <MDBCol md='8'>
                        <MDBInput name="logo" type='file'  validate labelClass='white-text' onChange={this.fileSelectHandler}/>
                        </MDBCol>
                     <MDBCol md='4'><Button onClick={this.fileUploadHandler}>upload</Button></MDBCol>
                   </MDBRow>
                   <MDBRow>
                     <MDBCol md='8'>
                        <MDBInput name='image' type='file' labelClass='white-text' onChange={this.fileSelectHandler}/>
                        </MDBCol>
                     <MDBCol md='4'> <Button onClick={this.fileUploadHandler}>upload</Button></MDBCol>
                   </MDBRow>
                   <ImageUploder></ImageUploder>
      
                <MDBRow className='d-flex align-items-center mb-4'>
                    <div className='text-center mb-3 col-md-5'>
                      <MDBBtn color='success' rounded type='button' className='btn-block z-depth-1' onClick={this.saveNewAdHandller}>
                        Save Ads
                  </MDBBtn>
                    </div>
                  </MDBRow>
                  <MDBCol md='12'>

                    <p className='font-small white-text d-flex justify-content-end'>
                      <h1> {this.state.status}</h1>
                    </p>

                  </MDBCol>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>

        </MDBContainer>



      </div>
    );
  }

}
export default CreateNewAdd;