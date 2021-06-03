import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-dom";
import "./CorsDetls.css";
export default function CorsDetls({ course }) {
  const handelAddProduct = (pd) => {
    console.log(pd);
  };
  return (
    <View>
      {/* <img src={course.imgUrl} alt="" style={{ width: "100%" }} /> */}
      <div className="corse-detls">
        <h6>{course.course}</h6>
        <p>
          <span className="price">${course.price}</span>{" "}
          <span className=" discount">{course.discount}%</span>
          <sub style={{ color: "darkgray", padding: "0px 5px" }}>discount</sub>
        </p>
        <div className="buy-now-btn">
          <Link to="/book">
            <button onClick={() => handelAddProduct(course)}>
              buy this course
            </button>
          </Link>
        </div>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({});
