import React,{ useEffect , useState} from 'react';
import { withRouter, Route,Switch,useLocation } from 'react-router-dom';
//import UploadService from "../services/file-upload.service";
//import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../../constants/apiConstants';
import {ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import  "./Additems.css";


//import styles  from "./Home.css"


var ps;

function Additems(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  
  
  const [Item , setState] = useState({
    id: '',
    userid: 'dummyuserid',
    name: '',
    price: '',
    selectedFile: null,
    filename: '',
    startdate: '',
    enddate: '',
    description: '',
    category: '',
    currentFile: undefined,
    previewImage: undefined,
    progress: 0,
    message: "",
    imageInfos: [],
    successMessage: null

})



const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}

 
 /*const handleChange = (event) => {
    this.setState({
        name: document.getElementById('name').value.this,
        price: document.getElementById('price').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        startdate: document.getElementById('startdate').value,
        enddate: document.getElementById('enddate').value,
    })
} */

const fileSelectedHandler = (event) => {
    let file = event.target.files[0].name;
    this.setState({
        selectedFile: event.target.files[0],
        filename: document.getElementById('file').value
    })
    console.log(file);
}

const redirectToHome = () => {
    //props.updateTitle('Home')
    //props.updateEmail(state.email);
    props.history.push('/home');
}


const fileUploadHandler = (event) => {

    event.preventDefault();

    let formData = new FormData();
    formData.append('id', uuidv4());
    //formData.append('userid', this.state.userid);
    formData.append('name', Item.name);
    formData.append('price', Item.price);
    formData.append('category',Item.category);
    formData.append('description', Item.description);
    formData.append('begindate', Item.startdate);
    formData.append('enddate', Item.enddate);
    formData.append('file', Item.file);

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
            userid: Item.userid,
            name: Item.name,
            price: Item.price,
            category: Item.category,
            description: Item.description,
            begindate: Item.startdate,
            enddate: Item.enddate
        },
        {
          headers: {
            "x-access-token": "token-value",
          },
        }
      ).then(function (response) {
        if(response.status === 200){
            setState(prevState => ({
                ...prevState,
                'successMessage' : 'Submission successful. Redirecting to home page..'
            }))
            localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
            //redirectToHome();
            //props.showError(null)
        }
        else if(response.code === 204){
            props.showError("Username and password do not match");
        }
        else{
            props.showError("Username does not exists");
        }
    })
    .catch(function (error) {
        console.log(error);
    });

   

}
    
    return(
      
        <div id='classComponentForm' >
                <h2>Vendor Form</h2>

                <form id='form' encType="multipart/form">
                <div class="row">
                <label>Category</label>
                    <input 
                        type="text" 
                        name="category" 
                        id="category" 
                        placeholder="Select category"
                        class="mytextwidth"
                        value={Item.category}
                       onChange={handleChange}
                    />
                    <label>Product name </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name of the product"
                        class="mytextwidth" 
                        value={Item.name}
                        onChange={handleChange}
                    />
                    </div>
                    <div class="row">           
                    <label>Price </label>
                    <input 
                        type="number" 
                        name="price" 
                        id="price" 
                        placeholder="Price"
                        class="mytextwidth"
                        value={Item.price} 
                        onChange={handleChange}
                    />
                    <label>Description </label>
                    <input 
                        type="text" 
                        name="description" 
                        id="description"
                        class="mytext" 
                        placeholder="Description"
                        value={Item.description}
                        onChange={handleChange}
                    />
                    </div>
                    <div class="row">
                    <label>Begin Date </label>
                    <input
                    type="date" 
                    name="startdate"
                    placeholder="dd-mm-yyyy"
                    class="mytextwidth" 
                    id="startdate"
                    value={Item.startdate}
                    onChange={handleChange}
                    />
                    <label>Expire Date </label>
                    <input
                    type="date" 
                    name="enddate"
                    placeholder="dd-mm-yyyy"
                    class="mytextwidth" 
                    id="enddate"
                    value={Item.enddate}
                    onChange={handleChange}
                    />
                    </div>
                    <button className="submitBtn" type="submit" onClick={fileUploadHandler}>Add Products</button>
                </form>
                <div className="alert alert-success mt-2" style={{display: Item.successMessage ? 'block' : 'none' }} role="alert">
                {Item.successMessage}
            </div>
              
    </div>
    
    )
}

export default withRouter(Additems);