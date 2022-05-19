import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//Components
import HeaderComponent from "../../components/HeaderComponent";
import ContentComponent from "../../components/ContentComponent";
import BtnComponent from "../../components/BtnComponent";
//Data
import { regulationText } from "../../data/contentText";

export default function Regulation({ navigation }) {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <ScrollView style={styles.bgContainer}>
        <View>
          <HeaderComponent imgName="reg-header" />
          <ContentComponent
            sdTitle={true}
            plainTitle="Regulations"
            plainText={regulationText}
          />
          <Text style={styles.subTopic}>Regulations of each region</Text>
          <View style={styles.rowBtns}>
            <BtnComponent
              imgName="reg-btn-usa"
              imgText="United States"
              navigation={navigation}
              routeName="UsaScreen"
              widthBtn={110}
              heightBtn={105}
            />
            <BtnComponent
              imgName="reg-btn-sv"
              imgText="El Salvador"
              navigation={navigation}
              routeName="UsaScreen"
              widthBtn={110}
              heightBtn={105}
            />
            <BtnComponent
              imgName="reg-btn-eu"
              imgText="European Union"
              navigation={navigation}
              routeName="UsaScreen"
              widthBtn={110}
              heightBtn={105}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  subTopic: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 21,
    marginBottom: 7,
    textAlign: "center",
  },
  rowBtns: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
