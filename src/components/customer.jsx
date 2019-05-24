import React, { Component } from 'react';
import Gravatar from 'react-gravatar';

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
            { emailAddress ? <Gravatar email={emailAddress} size={150}/> : <img style={{width: '150px'}} src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y" alt="gravatar"/>}
             <h3>{emailAddress}</h3>
             <p>{expectedTime}</p>
            </div>
        )
    }
}
