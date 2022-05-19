import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnComponent(props) {
  const {
    imgName,
    imgText,
    navigation,
    routeName,
    widthContainer,
    bottomContainer,
    widthBtn,
    heightBtn,
    bgColor = "#DBDFFD",
  } = props;

  ImgSelector();

  function ImgSelector() {
    let dinamicPath;

    switch (imgName) {
      case "home-hab-btn":
        dinamicPath = require("../../assets/menu/home-hab-btn.png");
        break;
      case "home-env-btn":
        dinamicPath = require("../../assets/menu/home-env-btn.png");
        break;
      case "home-reg-btn":
        dinamicPath = require("../../assets/menu/home-reg-btn.png");
        break;
      case "hab-btn-1":
        dinamicPath = require("../../assets/menu/hab-btn-1.png");
        break;
      case "hab-btn-2":
        dinamicPath = require("../../assets/menu/hab-btn-2.png");
        break;
      case "hab-btn-3":
        dinamicPath = require("../../assets/menu/hab-btn-3.png");
        break;
      case "reg-btn-usa":
        dinamicPath = require("../../assets/menu/reg-btn-usa.png");
        break;
      case "reg-btn-sv":
        dinamicPath = require("../../assets/menu/reg-btn-sv.png");
        break;
      case "reg-btn-eu":
        dinamicPath = require("../../assets/menu/reg-btn-eu.png");
        break;
      default:
        break;
    }

    return <Image style={styles.imgC} source={dinamicPath} />;
  }

  return (
    <View
      style={{
        width: widthContainer,
        marginBottom: bottomContainer,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate(routeName)}
        style={[
          styles.tchBtn,
          { width: widthBtn, height: heightBtn, backgroundColor: bgColor },
        ]}
      >
        <ImgSelector />
        <Text style={styles.txt}>{imgText}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  tchBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  imgC: {
    width: 60,
    height: 60,
  },
});
