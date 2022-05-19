import React from "react";
import { View, Text, StyleSheet } from "react-native";
//Components
import BtnHomeComponent from "./BtnHomeComponent";

export default function SectionHomeComponent({ navigation }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.txtTemas}>EXPLORE</Text>
      <View style={styles.rowBtns}>
        <BtnHomeComponent
          imgName="home-hab-btn"
          imgText="HAB"
          imgBg="#"
          navigation={navigation}
          routeName={"HABScreen"}
          widthBtn={105}
          heightBtn={105}
        />
        <BtnHomeComponent
          imgName="home-env-btn"
          imgText="Environment"
          imgBg="#"
          navigation={navigation}
          routeName={"EnvironmentScreen"}
          widthBtn={105}
          heightBtn={105}
        />
        <BtnHomeComponent
          imgName="home-reg-btn"
          imgText="Regulation"
          imgBg="#"
          navigation={navigation}
          routeName={"RegulationScreen"}
          widthBtn={105}
          heightBtn={105}
        />
      </View>
      <Text style={styles.txtTemas2}>BALLOONS</Text>
      <View style={styles.columnBtns}>
        <BtnHomeComponent
          imgName="hab-btn-1"
          imgText="Conventional Ballooning"
          navigation={navigation}
          routeName={"EnvironmentScreen"}
          widthContainer="100%"
          bottomContainer={20}
          heightBtn={105}
        />
        <BtnHomeComponent
          imgName="hab-btn-2"
          imgText="Long Duration Ballooning"
          navigation={navigation}
          routeName={"EnvironmentScreen"}
          widthContainer="100%"
          bottomContainer={20}
          heightBtn={105}
        />
        <BtnHomeComponent
          imgName="hab-btn-3"
          imgText="Ultra Long Duration Ballooning"
          navigation={navigation}
          routeName={"EnvironmentScreen"}
          widthContainer="100%"
          bottomContainer={20}
          heightBtn={105}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    width: "100%",
    marginTop: 10,
  },
  txtTemas: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
  },
  txtTemas2: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 25,
    marginBottom: 15,
  },
  rowBtns: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  columnBtns: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 20,
    marginRight: 20,
  },
});
