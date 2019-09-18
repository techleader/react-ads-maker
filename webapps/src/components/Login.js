import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBInput, MDBBtn } from "mdbreact";
import image from '../image/baa.jpg';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }
  render() {
    return (
      <div >
        <br></br>
        <MDBContainer>
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
                        <strong> IN</strong>
                      </a>
                    </h3>
                  </div>
                  <MDBInput
                    label='Your email'
                    group
                    type='text'
                    validate
                    labelClass='white-text'
                    required
                  />
                  <MDBInput
                    label='Your password'
                    group
                    type='password'
                    validate
                    labelClass='white-text'
                    required
                  />

                  <div className='md-form pb-3'>
                    <MDBInput
                      label={
                        <>
                          Accept the&nbsp;
                      <a href='#!' className='green-text font-weight-bold'>
                            Terms and Conditions
                      </a>
                        </>
                      }
                      type='checkbox'
                      id='checkbox1'
                      labelClass='white-text'
                    />
                  </div>
                  <MDBRow className='d-flex align-items-center mb-4'>
                    <div className='text-center mb-3 col-md-12'>
                      <MDBBtn
                        color='success'
                        rounded
                        type='button'
                        className='btn-block z-depth-1'
                      >
                        Sign in
                  </MDBBtn>
                    </div>
                  </MDBRow>
                  <MDBCol md='12'>
                    <p className='font-small white-text d-flex justify-content-end'>
                      Have an account?
                  <a href='#!' className='green-text ml-1 font-weight-bold'>
                        Log in
                  </a>
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

export default Login;