import React, { Component } from 'react';
import Customer from './customer';
const uuidv4 = require('uuid/v4');

export default class Main extends Component {

    constructor(props) {
        super()
        this.state = {
            data: [],
            customers: [],
            dataReceived: false
        }
    }

    componentDidMount() {

        let username = 'codetest1';
        let password = 'codetest100';
       
    //   setInterval(() => { 
        fetch('https://cors-anywhere.herokuapp.com/https://app.qudini.com/api/queue/gj9fs', {   
            headers: new Headers({
                'Authorization': 'Basic ' + btoa(username + ":" + password),
            })
        })
        .then((response) => response.json())
        .then((data) => {
           // console.log(data.queueData.queue.customersToday);
            let customers = data.queueData.queue.customersToday;
            this.setState({customers});
        })
            .catch((error) => {
                console.error(error);
            });
                      
        // }, 30000); 
            
       // clearInterval(timerID); 
    }

    

    render() {
    
        const customer = this.state.customers.map(customer => (
            <Customer customer={customer} key={uuidv4()} />
        ))

        return (
            <div className="main" >
            {customer} 
            </div>
        )
    }
}
