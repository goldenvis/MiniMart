import React, { Component } from 'react'
import  "./Additems.css";
export class VendorAddress extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div id='classComponentForm' >
            <div className="form-container">
                <h1 className="mb-5">Vendor Address</h1>
                <div className="form-group">
                    <label htmlFor="streetname">Street Name</label>
                    <br/>
                    <input type="text" className="form-control" name="streetname" onChange={inputChange('streetname')} value={values.streetname} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <br/>
                    <input type="text" className="form-control" name="city" onChange={inputChange('city')} value={values.city} />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <br/>
                    <input type="text" className="form-control" name="states" onChange={inputChange('states')} value={values.states} />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <br/>
                    <input type="text" className="form-control" name="country" onChange={inputChange('country')} value={values.country} />
                </div>

                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn2 btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn3 btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default VendorAddress