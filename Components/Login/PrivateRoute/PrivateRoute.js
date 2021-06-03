import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../../App";
export default function PrivateRoute({ children, ...rest }) {
  const [loginUser, setLoginUser] = useContext(UserContext);
  return (
    <View>
      <div>
        <Route
          {...rest}
          render={({ location }) =>
            loginUser.loginUserEmail ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location },
                }}
              />
            )
          }
        />
      </div>
    </View>
  );
}

const styles = StyleSheet.create({});
