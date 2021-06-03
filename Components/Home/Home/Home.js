import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StyleSheet, Text, View } from "react-native";
import Course from "../../Course/Course";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  return (
    <View>
      <NavBar></NavBar>
      <Course></Course>
    </View>
  );
}

const styles = StyleSheet.create({});
