import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "../../../App";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../CheckoutForm";
import { useParams } from "react-router";



const stripePromise = loadStripe('pk_test_51IeIzjIDAsPWisA8Td8iQbbhlPKSAW7ys5A9Kc5EpVzhMZJ05JjS4ASCEeuUk9lKrugBLxcNmSVCxM1fmDWatj9J00GJlFdeaH');


export default function Book() {
  let { id } = useParams(); 
  console.log(id)
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  console.log(loggedInUser);
  const handlePayment = () => {
    console.log()
  }
  return (
    <View>
      <div>
        <label for="formGroupExampleInput" className="form-label">Name</label>
        <input type="text" class="form-control" id="formGroupExampleInput"  value={loggedInUser.loginUserName} required/>
      </div>
      <div>
        <label for="formGroupExampleInput2" className="form-label">Email</label>
        <input type="text" class="form-control" id="formGroupExampleInput2"  value={loggedInUser.loginUserEmail} required/>
      </div>
      <Text>
      total payable amount - ${}
      </Text>
      <Elements stripe={stripePromise}>
          <CheckoutForm handlePayment={handlePayment}></CheckoutForm>
        </Elements>
    </View>
  );
}

const styles = StyleSheet.create({});
