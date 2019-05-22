import React, { Component } from 'react'
// const axios = require('axios');

export default class Main extends Component {

    constructor(props) {
        super()
        this.state = {
            data: [],
            dataReceived: false
        }
    }

    componentDidMount() {
        let session_url = 'https://cors-anywhere.herokuapp.com/https://app.qudini.com/api/queue/gj9fs';

        var data = { username: 'codetest1', password: 'codetest100' };

        // Want to use async/await? Add the `async` keyword to your outer function/method.

        // axios.get(session_url, { params: { username: 'codetest1', password: 'codetest100' } }
        // ).then(function (res) {
        //     console.log('Authenticated');
        //     console.log(res)
        // }).catch(function (error) {
        //     console.log('Error on Authentication');
        // });

        fetch(session_url, {
            method: 'GET',
            mode: 'no-cors',
            credentials: 'include',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));

    }


    render() {
        return (
            <div className="main" >
                Main component
            </div>
        )
    }
}
