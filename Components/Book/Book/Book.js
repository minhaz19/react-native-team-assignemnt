import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { UserContext } from "../../../App";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../CheckoutForm";
import { useParams } from "react-router";
import grapichDesignerImg from "../../../images/grapich-designer.jpeg";
import webDevloperimg from "../../../images/web-developer.jpeg";
import photoshopImg from "../../../images/photo-shop.jpg";
import degitalMarketingImg from "../../../images/degital-marketing.jpg";

const courseDetails = [
  {
    id:1,
    course: "grapich designer",
    img: grapichDesignerImg,
    price: 150,
    discount: 10,
  },
  {
    id:2,
    course: "Web devloper",
    img: webDevloperimg,
    price: 250,
    discount: 15,
  },
  {
    id:3,
    course: "Photo Shop",
    img: photoshopImg,
    price: 185,
    discount: 10,
  },
  {
    id:4,
    course: "Degital Marketing",
    img: degitalMarketingImg,
    price: 120,
    discount: 12,
  },
]

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
      <ScrollView>
        <label for="formGroupExampleInput" className="form-label">Name</label>
        <input type="text" class="form-control" id="formGroupExampleInput"  value={loggedInUser.loginUserName} required/>
      </ScrollView>
      <ScrollView>
        <label for="formGroupExampleInput2" className="form-label">Email</label>
        <input type="text" class="form-control" id="formGroupExampleInput2"  value={loggedInUser.loginUserEmail} required/>
        </ScrollView>
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
