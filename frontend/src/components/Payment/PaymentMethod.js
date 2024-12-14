import React, { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import StripeCheckout from 'react-stripe-checkout';
import './paymentMethod.css';
const CreditCardPaymentMethod = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  )
}

const PaymentMethod = () => {
  const [ShowCreditCard, setShowCreditCard] = useState(false);
  const [PaymentMethod, setPaymentMethod] = useState('')
  const handlePaymentMethod = (e) => {
    e.preventDefault()

  }
  const stripePromise = loadStripe('pk_test_51Kf1MjBFBTl526QUq1EmyERvccLDvwp07XY5FKYwZp8Rhnv8qOSDFuTk5U9LySIbM9koM9DyqlMx9j9x0WIK2Oit00qfhGMg0Z');
  return (
    <div className="container">
      <div className="payment-method">
        <div className="payment-title">
          <h5>Payment Method</h5>
        </div>
        <div className="payment-method-variant">
          <form onSubmit={handlePaymentMethod}>
            <div className="payment-choose">
              <h5>Choos Payment Method</h5>
              <div className="payment">
                <div className="payment-value">
                  <input
                    type="radio"
                    value="Cash On Delivery"
                    name="cod"
                    id="cod"
                    checked={ShowCreditCard === false}
                    onChange={(e) => setShowCreditCard(e.target.value ? false : null)} />
                </div>
                <div className="payment-label">
                  <label htmlFor="cod" className="cursor-pointer"> Cash On Delivery</label>
                </div>
              </div>
              <div className="payment">
                <div className="payment-value">
                  <input
                    type="radio"
                    value="credit card"
                    name="masterCard"
                    id="masterCard"
                    checked={ShowCreditCard === true}
                    onChange={(e) => setShowCreditCard(e.target.value ? true : null)}
                  />
                </div>
                <div className="payment-label">
                  <label htmlFor="masterCard" className="cursor-pointer"> Credit / debit / Card</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {
        ShowCreditCard ?
          <Elements stripe={stripePromise}>
            <CreditCardPaymentMethod />
          </Elements>
          :
          null
      }
    </div>
  );
}

export default PaymentMethod;

