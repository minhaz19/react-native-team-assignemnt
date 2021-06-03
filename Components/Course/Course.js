import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import datas from "../Data/Data.json";
import CorsDetls from "./CorsDetls/CorsDetls";
import grapichDesignerImg from "../../images/grapich-designer.jpeg";
import webDevloperimg from "../../images/web-developer.jpeg";
import photoshopImg from "../../images/photo-shop.jpg";
import degitalMarketingImg from "../../images/degital-marketing.jpg";
import "./Course.css";
//////////////
const grapichDesigner = [
  {
    id:1,
    course: "grapich designer",
    img: grapichDesignerImg,
    price: 150,
    discount: 10,
  },
];
const webDevloper = [
  {
    id:2,
    course: "Web devloper",
    img: webDevloperimg,
    price: 250,
    discount: 15,
  },
];
const photoShop = [
  {
    id:3,
    course: "Photo Shop",
    img: photoshopImg,
    price: 185,
    discount: 10,
  },
];
const degitalMarketing = [
  {
    id:4,
    course: "Degital Marketing",
    img: degitalMarketingImg,
    price: 120,
    discount: 12,
  },
];
/////////////
export default function Course() {
  const [data, setData] = useState(datas);

  return (
    <View>
      <div className="grapich-designer">
        {grapichDesigner.map((course) => (
          <CorsDetls course={course}></CorsDetls>
        ))}
      </div>
      <div className="web-devloper">
        {webDevloper.map((course) => (
          <CorsDetls course={course}></CorsDetls>
        ))}
      </div>
      <div className="photoShop">
        {photoShop.map((course) => (
          <CorsDetls course={course}></CorsDetls>
        ))}
      </div>
      <div className="degitial-marketing">
        {degitalMarketing.map((course) => (
          <CorsDetls course={course}></CorsDetls>
        ))}
      </div>
      {/* <div className="corse-detls">
          <Text
            style={{ fontSize: "30px", color: "#f64747", display: "block" }}
          >
            Grapich designer
          </Text>
          <Text style={{ color: "gray", display: "block" }}>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, sequi?{" "}
          </Text>
          <div className="buy-now-btn">
            <button>buy this course</button>
          </div>
        </div> */}
    </View>
  );
}

const styles = StyleSheet.create({});
