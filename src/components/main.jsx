import React, { Component } from 'react'
// const axios = require('axios');
// let base64 = require('base-64');

export default class Main extends Component {

    constructor(props) {
        super()
        this.state = {
            data: [],
            dataReceived: false
        }
    }

    componentDidMount() {
   
        let username = 'codetest1';
        let password = 'codetest100';
        
        fetch('https://cors-anywhere.herokuapp.com/https://app.qudini.com/api/queue/gj9fs', {   
            headers: new Headers({
                'Authorization': 'Basic ' + btoa(username + ":" + password),
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson, 'res JSON');
        })
            .catch((error) => {
                console.error(error);
            });
                      

    }


    render() {
        return (
            <div className="main" >
                Main component
            </div>
        )
    }
}
