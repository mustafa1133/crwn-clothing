import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) => {
    const priceForStripe = price * 100; // stripe needs prices in cents
    const publishableKey='pk_test_51HjOnIEkXQZXE8kX1opFF1bdPnxQwwb67QFOM218KVZpzzjaqVmbgt6YVDkxPboElpcpSP19pq4zZXGeviLRP6x5006E1IKElS';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description= {`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;  