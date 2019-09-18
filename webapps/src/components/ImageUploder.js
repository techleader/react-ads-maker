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
            <div>
                <h1>for further use</h1>
            </div>
        )
    }
 
   
}

export default ImageUploder;