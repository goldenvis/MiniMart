import React, { Component } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

class VendorRegistration extends Component {

    state = {
        companyname: '',
        vendorId: '',
        postalcode: '',
        state: '',
        city: '',
        address: '',
        line1: '',
        phonenumber: Number,
        companyregistrationnumber: '',
        filename: '',

    }

    handleChange = (event) => {
        this.setState({
            companyname: document.getElementById('companyname').value,
            vendorId: document.getElementById('vendorId').value,
            address: document.getElementById('address').value,
            postalcode: document.getElementById('postalcode').value,
            state: document.getElementById('state').value,
            city: document.getElementById('city').value,
            phonenumber: document.getElementById('phonenumber').value,
            companyregistrationnumber: document.getElementById('companyregistrationnumber').value,

        })
    }

    fileSelectedHandler = (event) => {
        let file = event.target.files[0].name;
        this.setState({
            selectedFile: event.target.files[0],
            filename: document.getElementById('file').value
        })
        console.log(file);
    }

    fileUploadHandler = (event) => {

        event.preventDefault();

        let formData = new FormData();

        formData.append('companyname', this.state.companyname);
        formData.append('vendorId', this.state.vendorId);

        formData.append('address', this.state.address);
        
        formData.append('postalcode', this.state.postalcode);
        formData.append('state', this.state.state);

        formData.append('city', this.state.city);
        formData.append('state', this.state.state);

        formData.append('phonenumber', this.state.phonenumber);
        
        formData.append('companyregistrationnumber', this.state.companyregistrationnumber);
        formData.append('filename', this.state.filename);
        formData.append('file', this.state.selectedFile);
        console.log(formData);
        console.log(this.state.name);
        console.log(this.state.startdate);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post("http://localhost:5000", formData, config)
        .then (res => {
            console.log(res.data);
            console.log(this.state.filename);
            console.log(formData);
        })
    }

    render () {
        return (
            <div className="formDiv">
                <h2>Vendor Registration</h2>
                <form encType="multipart/form">
                <label>Comapny name </label>
                    <input 
                        type="text" 
                        name="companyname" 
                        id="companyname" 
                        placeholder="Company Name" 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>address </label>
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        placeholder="address" 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>Sate </label>
                    <input 
                        type="text" 
                        name="state" 
                        id="state" 
                        placeholder="state" 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>Postal Code </label>
                    <input 
                        type="text" 
                        name="postalcode" 
                        id="postalcode" 
                        placeholder="postalcode" 
                        onChange={this.handleChange}
                    />
                   
                    <br/>
                    <label>City </label>
                    <input 
                        type="text" 
                        name="city" 
                        id="city" 
                        placeholder="city" 
                        onChange={this.handleChange}
                    />
                   
                    <br/>
        <label>phone number </label>
                    <input 
                        type="number"
                        name="phonenumber" 
                        id="phonenumber" 
                        placeholder="phonenumber" 
                        onChange={this.handleChange}
                    />
                   
                    <br/>
                    <label>Company Registration Number </label>
                    <input 
                        type="number"
                        name="companyregistrationnumber" 
                        id="companyregistrationnumber" 
                        placeholder="companyregistrationnumber" 
                        onChange={this.handleChange}
                    />
                   
                    <br/>
                    <label>Logo of company </label>
                    <input 
                        type="file" 
                        name="file" 
                        id="file" 
                        placeholder="Upload your file" 
                        onChange={this.fileSelectedHandler}
                    />
                    <br/>
                    <button className="submitBtn" type="submit" onClick={this.fileUploadHandler}>Registration</button>
                </form>
            </div>
        )
    }
}
export default VendorRegistration;