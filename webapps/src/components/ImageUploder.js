import React, { Component } from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBInput, MDBBtn } from "mdbreact";
class ImageUploder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectFile:null
        };
       
    }
 fileSelectHandler=(event) =>{
     this.setState({
         selectFile:event.target.files[0]
     })
     console.log(this.state.selectFile);
 }

 fileUploadHandler=()=>{
     const formData = new FormData();
     formData.append('file',this.state.selectFile,this.state.selectFile.name);
     axios.post('http://localhost:8080/adelement/image/upload',formData,{

     })
     .then(res=>{
        console.log(res); 
     });
     
 }
    render() {
        return (
            <MDBRow>
            <MDBCol sm={3}>
            <div style={{ display: "flex" }}>
                <input style={{display:'none'}} type="file" onChange={this.fileSelectHandler}
                ref={fileInput =>this.fileInput=fileInput}
                />
                <Button size="sm"
                variant="success"  style={{ marginRight: "auto",marginTop:"36px" }}
                onClick={()=>this.fileInput.click()}>Browse</Button>
                 
          </div>
            </MDBCol>
            <MDBCol sm={9}><MDBInput label="Upload your image" labelClass='white-text'  disabled type="text" /></MDBCol>
          </MDBRow>
        )
    }
 
   
}

export default ImageUploder;