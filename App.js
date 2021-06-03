import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import img from "./assets/adaptive-icon.png";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
///////////////

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Book from "./Components/Book/Book/Book";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

///////////////
export const UserContext = createContext();

export default function App() {
  const [loginUser, setLoginUser] = useState({});
  return (
    <View>
      <UserContext.Provider value={[loginUser, setLoginUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/book">
              <Book></Book>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
