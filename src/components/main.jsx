import React, { Component } from 'react';
import Customer from './customer';
import Form from './form';
import MyContext from './MyContext'

const uuidv4 = require('uuid/v4');

export default class Main extends Component {
    
   
    render() {
    
        return (
            <div className="main" >
            <Form/>
            
            {/* Using my Contecxt consumer */}
            <MyContext.Consumer>
                {(context) => (
                    
                    <>
                    {context.state.customers.map((customer, i) => 
                            <Customer customer={customer} key={uuidv4()} />
                            )}
                            </>
                )}
             </MyContext.Consumer>
            </div>
        )
    }
}
