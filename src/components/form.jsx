import React, { Component } from 'react'

export default class Form extends Component {
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
      }

    handleSubmit = (e) => {
       console.log(this.state.value)
        e.preventDefault();
      }

      handleChange = (e) => {
        this.setState({value: e.target.value});
      }
      
    render() {
        return (
            
            <form className="filter_form" onSubmit={this.handleSubmit}>
                
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Search customer by name..'/>
                
                <input type="submit" value="Search.." />
            </form> 
           
        )
    }
}
