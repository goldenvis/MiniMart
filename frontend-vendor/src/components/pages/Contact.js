import React, { Component } from 'react';
import VendorSetup from './VendorSetup';
import VendorAddress from './VendorAddress';
import Confirm from './Confirm';
import Success from './Success';
import  "./Additems.css";
//import  "./Additems.css";


export class Contact extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        phone: '',
        password: '',
        streetname: '',
        city: '',
        states: '',
        cid: '',
        crn: '',

    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { name, email, phone, password, streetname, city, states,cid,crn,vcountry,country} = this.state;
        const values = { name, email, phone, password, streetname, city, states,cid,crn,vcountry,country};

        switch (step) {
            case 1:
                return (
                    <VendorSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <VendorAddress
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Success />
                );
        }
    }
}

export default Contact