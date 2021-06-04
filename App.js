import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
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
    <ScrollView>
      <UserContext.Provider value={[loginUser, setLoginUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/book/:id">
              <Book></Book>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* //// */}

            <Route
              render={({ location, history }) => (
                <React.Fragment>
                  <SideNav
                    onSelect={(selected) => {
                      const to = "/" + selected;
                      if (location.pathname !== to) {
                        history.push(to);
                      }
                    }}
                  >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                      <NavItem eventKey="home">
                        <NavIcon>
                          <i
                            className="fa fa-fw fa-home"
                            style={{ fontSize: "1.75em" }}
                          />
                        </NavIcon>
                        <NavText>Home</NavText>
                      </NavItem>
                      {/* <NavItem eventKey="devices">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-device"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Devices</NavText>
                    </NavItem> */}
                    </SideNav.Nav>
                  </SideNav>
                  <main>
                    {/* <Route path="/" exact component={props => <RootComponent />} /> */}
                    <Route path="/home" component={(props) => <Home />} />
                    {/* <Route path="/devices" component={props => <Devices />} /> */}
                  </main>
                </React.Fragment>
              )}
            />

            {/* //// */}
          </Switch>
        </Router>
      </UserContext.Provider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
