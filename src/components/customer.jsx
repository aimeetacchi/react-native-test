import React, { Component } from 'react';

export default class Customer extends Component {
    render() {
        console.log(this.props.customer)
        // Destructing properties from the customer object.
        const { name, firstName, surname, emailAddress } = this.props.customer.customer;
        const {expectedTime } = this.props.customer;
        
        return (
            <div className="customerDetails">
            {/* checking if there is a first name if not use name */}
             <h2>{firstName ? firstName+surname : name }</h2>
             <img src="" alt=""/>
             <h3>{emailAddress}</h3>
             <p>{expectedTime}</p>
            </div>
        )
    }
}
