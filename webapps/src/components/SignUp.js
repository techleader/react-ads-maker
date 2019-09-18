import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBInput, MDBBtn, MDBCardBody, MDBIcon,  } from "mdbreact";
import image from '../image/baa.jpg';
    

class SignUp extends React.Component {
  state = {
    isOpen: ""
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
   
    return (
      <div >
      <br></br>
      <MDBContainer>
        <form className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                `url(${image})`,
              width: '28rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>
             
             
              <MDBInput
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="First name"
                labelClass='white-text'
                required
              >
               
              </MDBInput>
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
                labelClass='white-text'
              >
                 
              </MDBInput>
              <MDBInput
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                id="materialFormRegisterPasswordEx4"
                name="password"
                label="password"
                labelClass='white-text'
                required
              >
               
               
              </MDBInput>

              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='submit'
                    className='btn-block z-depth-1'
                  >
                    Sign Up
                  </MDBBtn>
                </div>
              </MDBRow>

            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </form>
    </MDBContainer>
 
   


      </div>
    );
  }
}

export default SignUp;