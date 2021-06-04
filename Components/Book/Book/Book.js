import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { UserContext } from "../../../App";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm";
import { useParams } from "react-router";
import grapichDesignerImg from "../../../images/grapich-designer.jpeg";
import webDevloperimg from "../../../images/web-developer.jpeg";
import photoshopImg from "../../../images/photo-shop.jpg";
import degitalMarketingImg from "../../../images/degital-marketing.jpg";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import PurchaseModal from "../PurchaseModal";
import NavBar from "../../Home/NavBar/NavBar";

const courseDetails = [
  {
    id: 1,
    course: "grapich designer",
    img: grapichDesignerImg,
    price: 150,
    discount: 10,
  },
  {
    id: 2,
    course: "Web devloper",
    img: webDevloperimg,
    price: 250,
    discount: 15,
  },
  {
    id: 3,
    course: "Photo Shop",
    img: photoshopImg,
    price: 185,
    discount: 10,
  },
  {
    id: 4,
    course: "Degital Marketing",
    img: degitalMarketingImg,
    price: 120,
    discount: 12,
  },
];

const stripePromise = loadStripe(
  "pk_test_51IeIzjIDAsPWisA8Td8iQbbhlPKSAW7ys5A9Kc5EpVzhMZJ05JjS4ASCEeuUk9lKrugBLxcNmSVCxM1fmDWatj9J00GJlFdeaH"
);

export default function Book() {
  /////////////////

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  ///////////////
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  const { control } = useForm();
  let { id } = useParams();

  const selectedCourse = courseDetails.find((c) => c.id == id);
  const { course, price, discount } = selectedCourse;

  const totalDiscount = (discount * price) / 100;
  const afterDiscount = price - totalDiscount;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <View>
      {/* <NavBar></NavBar>

      <div style={{ paddingLeft: "100px" }}> */}
      <View style={styles.container}></View>
      <Text style={styles.label}>Name</Text>
      <View>
        <TextInput
          style={styles.input}
          value={loggedInUser.loginUserName}
          placeholder="Your Address"
        />
      </View>
      <Text style={styles.label}>Email</Text>
      <View>
        <TextInput
          style={styles.input}
          value={loggedInUser.loginUserEmail}
          placeholder="Your Address"
        />
      </View>
      <Text style={styles.label}>Name</Text>
      <View>
        <TextInput style={styles.input} placeholder="Your Address" />
      </View>

      <View>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>
          Total payable taka after discount: ${afterDiscount}
        </Text>
      </View>
      <View>
        <Elements stripe={stripePromise}>
          <CheckoutForm afterDiscount={afterDiscount}></CheckoutForm>
        </Elements>
      </View>
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Purchase"
          onPress={openModal}
        />
      </View>
      <PurchaseModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></PurchaseModal>
      {/* </div> */}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "black",
    margin: 20,
    fontSize: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 4,
    fontSize: 20,
  },
});
