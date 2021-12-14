import React, { Component } from 'react'
import  "./Additems.css";

export class VendorSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div id='classComponentForm' >
            <div className="form-container">
                <h1 className="mb-5">Vendor Registration Form</h1>
                <div className="form-group">
                    <label htmlFor="name">Company Name</label>
                    <br/>
                    <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="cid">Company ID</label>
                    <br/>
                    <input type="number" className="form-control" name="cid" onChange={inputChange('cid')} value={values.cid} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="vcountry">Country</label>
                    <br/>
                    <input type="text" className="form-control" name="vcountry" onChange={inputChange('vcountry')} value={values.vcountry} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">phone</label>
                    <br/>
                    <input type="phone" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>

                <div className="form-group">
                    <label htmlFor="CRN">Company Registration Number</label>
                    <br/>
                    <input type="text" className="form-control" name="crn" onChange={inputChange('crn')} value={values.crn} />
                </div>

                <br />

                <div className="text-right">
                    <button className="btn3 btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </div>
            </div>
        )
    }
}

export default VendorSetup