import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function MaterialComponent(props) {
  const { plainTitle = "", plainText = "", imgName } = props;

  ImgSelector();

  function ImgSelector() {
    let dinamicPath;

    switch (imgName) {
      case "balloon":
        dinamicPath = require("../../../assets/meterials/balloon.jpeg");
        break;
      case "pchute":
        dinamicPath = require("../../../assets/meterials/pchute.jpeg");
        break;
      case "gps":
        dinamicPath = require("../../../assets/meterials/gps.png");
        break;
      case "camera":
        dinamicPath = require("../../../assets/meterials/camera.jpeg");
        break;
      case "helium":
        dinamicPath = require("../../../assets/meterials/helium.jpeg");
        break;
      case "polar":
        dinamicPath = require("../../../assets/meterials/polar.jpeg");
        break;
      case "string":
        dinamicPath = require("../../../assets/meterials/string.jpeg");
        break;
      default:
        break;
    }
    return <Image style={styles.imgMaterial} source={dinamicPath} />;
  }

  return (
    <View style={styles.mainContiner}>
      <Text style={styles.secondaryTitle}>{plainTitle}</Text>
      <View style={styles.contetnRow}>
        <View style={styles.contentLeft}>
          <Text style={styles.contentText}>{plainText}</Text>
        </View>
        <View style={styles.contentRight}>
          <ImgSelector />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContiner: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 17,
  },
  secondaryTitle: {
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 7,
  },
  contetnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentText: {
    marginBottom: 17,
    fontSize: 17.5,
  },
  contentLeft: { width: "60%" },
  contentRight: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgMaterial: { width: 140, height: 140 },
});
