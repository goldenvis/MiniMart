import React, { Component } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import './all.css';


class VendorItems extends Component {

    state = {
        id: '',
        userid: 'dummyuserid',
        name: '',
        price: '',
        selectedFile: null,
        filename: '',
        startdate: '',
        enddate: '',
    }

    handleChange = (event) => {
        this.setState({
            name: document.getElementById('name').value,
            price: document.getElementById('price').value,
            startdate: document.getElementById('startdate').value,
            enddate: document.getElementById('enddate').value,
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
        formData.append('id', uuidv4());
        formData.append('userid', this.state.userid);
        formData.append('name', this.state.name);
        formData.append('price', this.state.price);
        formData.append('begindate', this.state.startdate);
        formData.append('enddate', this.state.enddate);
        console.log(formData);
        for (var [key, value] of formData.entries()) { 
            console.log(key, value);
           }
        //console.log(this.state.userid);


        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        //axios.post("http://localhost:5001/vendoritems", formData,config)
       /*axios.post("/vendoritems", formData,config)
        .then (res => {
            //console.log(res.data);
            //console.log(formData);
        }) */

        axios.post(
            '/vendoritems',
            {
                id: uuidv4(),
                userid: this.state.userid,
                name: this.state.name,
                price: this.state.price,
                begindate: this.state.startdate,
                senddate: this.state.enddate
            },
            {
              headers: {
                "x-access-token": "token-value",
              },
            }
          ); 
    }

    render () {
        return (
            <div id='classComponentForm'>
                <h2>Vendor Form</h2>

                <form id='form' encType="multipart/form">
                <label>Category </label>
                    <input 
                        type="text" 
                        name="category" 
                        id="Category" 
                        placeholder="Select category"
                        class="mytextwidth" 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>Product name </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name of the product"
                        class="mytextwidth" 
                        onChange={this.handleChange}
                    />
                    <br/>
                
                    <label>Price </label>
                    <input 
                        type="number" 
                        name="price" 
                        id="price" 
                        placeholder="Price"
                        class="mytextwidth" 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>Description </label>
                    <input 
                        type="text" 
                        name="description" 
                        id="description"
                        class="mytext" 
                        placeholder="Description"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>Begin Date </label>
                    <input
                    type="date" 
                    name="startdate"
                    placeholder="dd-mm-yyyy"
                    class="mytextwidth" 
                    id="startdate"
                    onChange={this.handleChange}
                    />
                    <br/>
                    <label>Expire Date </label>
                    <input
                    type="date" 
                    name="enddate"
                    placeholder="dd-mm-yyyy"
                    class="mytextwidth" 
                    id="enddate"
                    onChange={this.handleChange}
                    />
                    <br/>
                    <button className="submitBtn" type="submit" onClick={this.fileUploadHandler}>Add Products</button>
                </form>
            </div>
        )
    }
}
export default VendorItems;