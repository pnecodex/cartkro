import $, { data } from 'jquery';
import React, { Fragment, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CreateOrder } from '../../actions/order';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import StripeCheckout from 'react-stripe-checkout';
import apiCall from '../../apiCall';
const stripePromise = loadStripe('pk_test_51Kf1MjBFBTl526QUq1EmyERvccLDvwp07XY5FKYwZp8Rhnv8qOSDFuTk5U9LySIbM9koM9DyqlMx9j9x0WIK2Oit00qfhGMg0Z');
function PlaceOrder(props) {
    const cart = useSelector(state => state.carts);
    const createOrder = useSelector(state => state.orderCreate);

    const { cartItems, shipping } = cart;

    const dispatch = useDispatch()
    const PlaceOrderHandler = () => {
        dispatch(CreateOrder(cartItems, shipping
        ));
    }

    useEffect(() => {
        console.warn(cartItems, 'price');
    }, [])
    const handlePayment = async (token, address) => {
        
        const metaData = {
            token:token,
            address:address
        }
        const payment = await apiCall('/payment','post',{token,cartItems});
        console.log(payment.data);
    }
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
    };
    return (
        <Fragment>

            {/* <PaymentElement /> */}
            <StripeCheckout
                stripeKey="pk_test_51Kf1MjBFBTl526QUq1EmyERvccLDvwp07XY5FKYwZp8Rhnv8qOSDFuTk5U9LySIbM9koM9DyqlMx9j9x0WIK2Oit00qfhGMg0Z"
                token={handlePayment}
                amount={cartItems[0].price}
                name={cartItems[0].productId}
            />
        </Fragment>
    )
}

export default PlaceOrder
