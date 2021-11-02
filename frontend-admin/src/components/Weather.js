import React , { Component } from 'react'
import axios from 'axios'

class Weather extends Component{

    constructor(props){
        super(props)
        this.state= {
            name:'',
            food:[],
            message:''
        }
        
    }

    handleHtmlControlChange = (event) => {
        this.setState({ [event.target.name]:event.target.value   })
    }

    handleChange = (event) => {
        this.setState({food: Array.from(event.target.selectedOptions, (item) => item.value)});
      }

    handleSubmit  = (event) => {
        console.log(this.state);
        event.preventDefault();
        axios.post('https://reqres.in/api/users',this.state).then( response => {
            console.log(response)
            this.setState({message:"User created successfuly."})
        }).catch( error => {
            console.log(error)
        })
    }

    render(){
        const { name,food,message} = this.state
        return(
            <div>
                <div className="success">{message}</div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label className='label'>Name : </label>
                        <input type='text' name="name" value={name} onChange={this.handleHtmlControlChange} />
                    </div>
                    <div>
                        <label  className='label'>Your Favorite Food : </label>
                        <select name="food" value={food} multiple={true} onChange={this.handleChange}>
                            <option value="pizza">Pizza</option>
                            <option value="pasta">Pasta</option>
                            <option value="burger">Burger</option>
                            <option value="sandwich">Sandwich</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Weather