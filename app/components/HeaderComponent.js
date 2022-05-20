import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

export default function HeaderComponent(props) {
  const { imgName } = props;

  ImgSelector();

  function ImgSelector() {
    let dinamicPath;

    switch (imgName) {
      case "hab-header":
        dinamicPath = require("../../assets/headers/hab-header.png");
        break;
      case "hab-example-1":
        dinamicPath = require("../../assets/headers/hab-example-1.jpeg");
        break;
      case "hab-one-header":
        dinamicPath = require("../../assets/headers/hab-one-header.png");
        break;
      case "ev-header":
        dinamicPath = require("../../assets/headers/ev-header.png");
        break;
      case "reg-header":
        dinamicPath = require("../../assets/headers/reg-header.png");
        break;
      default:
        break;
    }

    return <Image style={styles.imgDisplay} source={dinamicPath} />;
  }

  return (
    <View style={styles.imgContainer}>
      <ImgSelector />
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    justifyContent: "center",
  },
  imgDisplay: {
    width: Dimensions.get("window").width,
    height: 200,
  },
});
