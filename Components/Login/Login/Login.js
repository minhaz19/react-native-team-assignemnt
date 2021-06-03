import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";
import googleImg from "../../../images/images.png";
import "./Login.css";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
firebase.initializeApp(firebaseConfig);

export default function Login() {
  const [loginUser, setLoginUser] = useContext(UserContext);

  console.log(loginUser);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handelGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;

        const signInUser = {
          loginUserEmail: user.email,
          loginUserName: user.displayName,
          loginUserPhoto: user.photoURL,
        };
        setLoginUser(signInUser);
        history.replace(from);
        /////////////
        // sessionStorage.setItem("token", signInUser);
        ////////////
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <View>
      <Text>{loginUser.loginUserEmail}</Text>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="login-container">
          <div className="buttonss">
            <p style={{ fontFamily: "monospace" }}>Please Sign in</p>
            <button onClick={handelGoogleSignIn}>
              Continue with{" "}
              <img
                src={googleImg}
                alt=""
                style={{ width: "20px", paddingLeft: "10px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({});
