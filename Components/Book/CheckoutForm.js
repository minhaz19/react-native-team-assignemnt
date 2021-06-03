import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const CheckoutForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if (error) {
            setPaymentError(error);
            setPaymentSuccess(null);  
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
        }
    };
    return (
        <View>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <br/>
            <text>Your event charged will be </text>
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        {
            paymentError && <text>{paymentError.message}</text>
        }
        {
            paymentSuccess && <text>Payment successful</text>
        }
    </View>
    );
};
export default CheckoutForm;

const styles = StyleSheet.create({});