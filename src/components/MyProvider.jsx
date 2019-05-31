import React, { Component } from 'react'
import MyContext from './MyContext'

// Create Provider
class MyProvider extends Component {
    
        // setting state to empty
        state = {
            data: [],
            customers: [],
            dataReceived: false
        }
    
    componentDidMount() {

        let username = 'codetest1';
        let password = 'codetest100';
       
        const fetchData = () => {
        fetch('https://cors-anywhere.herokuapp.com/https://app.qudini.com/api/queue/gj9fs', {   
            // Setting up Basic Auths
            headers: new Headers({
                'Authorization': 'Basic ' + btoa(username + ":" + password),
            })
        })
        .then((response) => response.json())
        .then((data) => {
           // console.log(data.queueData.queue.customersToday);
            let customers = data.queueData.queue.customersToday;
            // setting customers array ===
            this.setState({customers});
            this.setState({data})
        })
            .catch((error) => {
                console.error(error);
            });
        }
    
        //call fatch data first time on page load
        fetchData();

        setInterval(() => {
        // get data again after every 30 seconds
            fetchData();              
            }, 30000); 
    }

    render(){        
        return (
            <MyContext.Provider value={{state: this.state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;