import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link, useHistory } from "react-router-dom";
import "./CorsDetls.css";
export default function CorsDetls({ course }) {

  let history = useHistory();
  const handelAddProduct = (id) => {
    const url = `/book/${id}`;
    history.push(url);
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
          <Link to={`/book/${course.id}`}>
            <button onClick={() => handelAddProduct(course.id)}>
              buy this course
            </button>
          </Link>
        </div>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({});
