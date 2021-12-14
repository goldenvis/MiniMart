import React, { Component } from 'react'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { name, email, phone, cid,crn,city,states,country,vcountry,address}
        } = this.props;

        return (
            <div id='classComponentForm' >
            <div className="form-container">
                <h1 className="mb-5">Confirm</h1>
                <ul class="list-group">
                    <li class="list-group-item">Company Name: {name}</li>
                    <li class="list-group-item">Company ID: {cid}</li>
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Country: {vcountry}</li>
                    <li class="list-group-item">Phone number: {phone}</li>
                    <li class="list-group-item">Company Registration Number:{crn}</li>
                    <li class="list-group-item">Street Address: {address}</li>
                    <li class="list-group-item">City: {city}</li>
                    <li class="list-group-item">State: {states}</li>
                    <li class="list-group-item">Country:{country}</li>
                </ul>

                <br /><br />

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

export default Confirm