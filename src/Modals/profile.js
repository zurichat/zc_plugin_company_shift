import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Label, Input, FormGroup } from 'reactstrap';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "Zinkeng Ajongafac",
            userRole: "Frontend Department",
            onDutyTag: null,
            userOnDuty: true,
            activeTab: true,
        }
    }

    render() {
        if (this.state.userOnDuty) {

            this.state.onDutyTag = <h5 >On Duty</h5>

        }
        else {
            this.state.onDutyTag = <h5 >Not On Duty</h5>
        }

        return (


            <Container>
                <Row>
                    <div className="box" style={{
                        position: 'relative',
                        padding: '20px',
                        backgroundColor: '#fff',
                        display: 'flex',

                    }}>
                        <div className="imgBox">
                            <img src="https://picsum.photos/200/300" alt="Profile Picture" style={{ borderRadius: "50%", height: 100, width: 100 }} />
                        </div>
                        <div style={{
                            paddingLeft: 15
                        }} className="content">
                            <h2>{this.state.userName}</h2>
                            <h4 style={{ color: "#b7b7b7", fontSize: 18 }}>{this.state.userRole}</h4>
                            <div style={{ color: this.state.userOnDuty ? '#109c5d' : 'red', display: 'flex' }}>
                                <div className="dot" style={{
                                    height: 10,
                                    width: 12,
                                    borderRadius: '50%',
                                    backgroundColor: this.state.userOnDuty ? '#109c5d' : 'red',
                                    alignSelf: 'center',



                                }}></div>
                                <div style={{ flex: 1, paddingLeft: 5, alignSelf: 'center', paddingTop: 5 }}>
                                    {this.state.onDutyTag}
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div style={{ display: 'flex' }}>
                        <div style={{ color: this.state.activeTab ? '#109c5d' : 'black' }} onClick={() => { this.setState({ activeTab: true }) }}>
                            <div style={{ flex: 1, alignSelf: 'center', paddingTop: 5 }}>
                                Profile
                            </div>
                            <div className="dot" style={{
                                height: 3,
                                width: 60,

                                backgroundColor: this.state.activeTab ? '#109c5d' : '',
                                alignSelf: 'center',
                            }}></div>
                        </div>
                        <div style={{ color: !this.state.activeTab ? '#109c5d' : 'black', paddingLeft: 20 }} onClick={() => {
                            this.setState({
                                activeTab: false
                            })
                        }}>
                            <div style={{ flex: 1, alignSelf: 'center', paddingTop: 5 }}>
                                Timesheet
                            </div>
                            <div className="dot" style={{
                                height: 3,
                                width: 70,

                                backgroundColor: !this.state.activeTab ? '#109c5d' : '#eaeaea',
                                alignSelf: 'center',
                            }}></div>
                        </div>
                    </div>
                </Row>
                <Row>
                    {this.state.activeTab ? (
                        <PersonalDetails />
                    ) : (
                        <TimeSheet />
                    )}
                </Row>
            </Container>
        );
    }

}

const PersonalDetails = () => {
    return (
        <div>
            <h1>Personal Details</h1>
            <Form>
                <Row style={{ paddingTop: 10 }}>
                    <Col xs="8" sm="6">
                        <FormGroup>
                            <Label for="First Name">First Name</Label>
                            <Input style={{ backgroundColor: '#eaeaea' }} type="text" name="firstName" id="firstname" placeholder="Zinkeng" />
                        </FormGroup>
                    </Col>
                    <Col xs="8" sm="6">
                        <FormGroup>
                            <Label for="lastname">Last Name</Label>
                            <Input style={{ backgroundColor: '#eaeaea' }} type="text" name="lastname" id="lastname" placeholder="Ajongafac" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row style={{ paddingTop: 20 }}>
                    <Col xs="8" sm="6">
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input style={{ backgroundColor: '#eaeaea' }} type="email" name="email" id="email" placeholder="emmanuelabu860@gmail.com" />
                        </FormGroup>
                    </Col>
                    <Col xs="8" sm="6">
                        <FormGroup>
                            <Label for="phonenumber">Phone Number</Label>
                            <Input style={{ backgroundColor: '#eaeaea' }} type="text" name="phonenumber" id="phonenumber" placeholder="08101730112" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row style={{ paddingTop: 20 }}>
                    <Col xs="8" sm="6">
                        <FormGroup>
                            <Label for="Country of Residence">Country of Residence</Label>
                            <Input style={{ backgroundColor: '#eaeaea' }} type="text" name="country" id="country" placeholder="Nigeria" />
                        </FormGroup>
                    </Col>
                    <Col xs="8" sm="6">
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input style={{ backgroundColor: '#eaeaea' }} type="address" name="address" id="address" placeholder="51. Iwaya Road" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
const TimeSheet = () => {
    return (
        <p style={{ paddingTop: 30, fontSize: 28, fontWeight: 'bold' }}>Render Time Sheet Component</p>
    );
}