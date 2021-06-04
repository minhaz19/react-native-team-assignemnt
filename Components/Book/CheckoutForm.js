import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const CheckoutForm = ({ afterDiscount, handlePayment }) => {
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
                <br />
                {/* <Button type="submit" style={styles.buttonInner}
                    color
                    title="Button" disabled={!stripe}>
                    Pay
                </Button> */}
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

const styles = StyleSheet.create({
    // button: {
    //     marginTop: 40,
    //     color: 'white',
    //     height: 40,
    //     backgroundColor: '#ec5990',
    //     borderRadius: 4,
    //   },
});