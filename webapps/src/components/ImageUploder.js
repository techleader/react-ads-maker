import React, { Component } from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';

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
                <input style={{display:'none'}} type="file" onChange={this.fileSelectHandler}
                ref={fileInput =>this.fileInput=fileInput}
                />
                <Button onClick={()=>this.fileInput.click()}>select your image</Button>
                <Button onClick={this.fileUploadHandler}>upload</Button>
            </div>
        )
    }
 
   
}

export default ImageUploder;