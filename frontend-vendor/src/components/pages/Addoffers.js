import React,{ useEffect , useState} from 'react';
import { withRouter, Route,Switch,useLocation } from 'react-router-dom';
//import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../../constants/apiConstants';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import  "./Additems.css";
//import styles  from "./Home.css"


var ps;
function Addoffers(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  
  const [state , setState] = useState({
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
})
const handleChangeForm = (event) => {
    setState({
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        startdate: document.getElementById('startdate').value,
        enddate: document.getElementById('enddate').value,
    })
}

const fileSelectedHandler = (event) => {
    let file = event.target.files[0].name;
    this.setState({
        selectedFile: event.target.files[0],
        filename: document.getElementById('file').value
    })
    console.log(file);
}

const fileUploadHandler = (event) => {

    event.preventDefault();

    let formData = new FormData();
    formData.append('id', uuidv4());
    formData.append('userid', this.state.userid);
    formData.append('name', this.state.name);
    formData.append('price', this.state.price);
    formData.append('category',this.state.category);
    formData.append('description', this.state.description);
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
            category: this.state.category,
            description: this.state.description,
            begindate: this.state.startdate,
            enddate: this.state.enddate
        },
        {
          headers: {
            "x-access-token": "token-value",
          },
        }
      ); 
}
    
    return(
      
        <div id='classComponentForm' >
                <h2>Add Products</h2>

                <form id='form' encType="multipart/form">
                <div class="row">
                <div class="form-group name1 col-md-3 text-left">
                <label>Category </label>
                    <input 
                        type="text" 
                        name="category" 
                        id="category" 
                        placeholder="Select category"
                        onChange={handleChangeForm}
                    />
                    </div>
                    <div class="form-group name2 col-md-3">
                    <label>Product name </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name of the product"
                        onChange={handleChangeForm}
                    />
                    </div>
                    <div class="form-group name3 col-md-3">
                    <label>Price   </label>
                    <input 
                        type="number" 
                        name="price" 
                        id="price" 
                        placeholder="Price"
                        onChange={handleChangeForm}
                    />
                    </div>
                    <div class="form-group name3 col-md-3">
                    <label>Description </label>
                    <input 
                        type="text" 
                        name="description" 
                        id="description"
                        class="mytext" 
                        placeholder="Description"
                        onChange={handleChangeForm}
                    />
                    </div>
                    <div class="form-group name3 col-md-3">
                    <label>Begin Date </label>
                    <input
                    type="date" 
                    name="startdate"
                    placeholder="dd-mm-yyyy"
                    class="mytextwidth" 
                    id="startdate"
                    onChange={handleChangeForm}
                    />
                    </div>
                    <div class="form-group name3 col-md-3">
                    <label>Expire Date </label>
                    <input
                    type="date" 
                    name="enddate"
                    placeholder="dd-mm-yyyy"
                    class="mytextwidth" 
                    id="enddate"
                    onChange={handleChangeForm}
                    />
                    </div>
                    </div>
                
                    <div class="form-group name3 col-md-3">
                    
                    <button className="submitBtn" type="submit" onClick={fileUploadHandler}>Add Products</button>
                    </div>
                </form>
            </div>
    
    )
}

export default withRouter(Addoffers);