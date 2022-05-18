import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnRowComponent(props) {
  const { imgName, imgText } = props;

  ImgSelector();

  function ImgSelector() {
    let dinamicPath;

    switch (imgName) {
      case "home-hab-btn":
        dinamicPath = require("../../../assets/menu/home-hab-btn.png");
        break;
      case "home-env-btn":
        dinamicPath = require("../../../assets/menu/home-env-btn.png");
        break;
      case "home-reg-btn":
        dinamicPath = require("../../../assets/menu/home-reg-btn.png");
        break;
      default:
        break;
    }

    return <Image style={styles.imgC} source={dinamicPath} />;
  }

  return (
    <View style={styles.btnsContainer}>
      <TouchableOpacity
        onPress={() => console.log("Hola BTN")}
        style={styles.tchBtn}
      >
        <ImgSelector />
        <Text style={styles.txt}>{imgText}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  btnsContainer: {},
  tchBtn: {
    width: 105,
    height: 105,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEEDF0",
    borderRadius: 10,
  },
  imgC: {
    width: 60,
    height: 60,
  },
});
