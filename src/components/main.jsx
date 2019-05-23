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
        
        let authString = `${username}:${password}`
        let headers = new Headers();

        
        headers.set('Authorization', 'Basic ' + btoa(authString), )

        fetch('https://app.qudini.com/api/queue/gj9fs', {
            method: 'GET',
            mode : 'no-cors',
            headers: headers,
        })
            .then(function (response) {
                console.log (response)
            
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
