import React from "react";
import { View, Text, StyleSheet } from "react-native";
//Components
import BtnRowComponent from "./BtnRowComponent";

export default function SectionHomeComponent() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.txtTemas}>EXPLORE</Text>
      <View style={styles.rowBtns}>
        <BtnRowComponent imgName="home-hab-btn" imgText="HAB" imgBg="#" />
        <BtnRowComponent
          imgName="home-env-btn"
          imgText="Environment"
          imgBg="#"
        />
        <BtnRowComponent
          imgName="home-reg-btn"
          imgText="Regulation"
          imgBg="#"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    width: "100%",
    marginTop: 20,
  },
  txtTemas: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
  },
  rowBtns: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
