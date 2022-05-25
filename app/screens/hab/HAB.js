import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
//Components
import HeaderComponent from "../../components/HeaderComponent";
import TitleComponent from "../../components/TitleComponent";
import ContentComponent from "../../components/ContentComponent";
import BtnComponent from "../../components/BtnComponent";
//Data
import {
  habText,
  habPlainText1,
  habText1,
  habPlainText2,
  habText2,
  habPlainText3,
  habText3,
  habPlainText4,
  habText4,
  habPlainText5,
  habText5,
  habPlainText6,
  habText6,
} from "../../data/contentText";

export default function HAB({ navigation }) {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <ScrollView style={styles.bgContainer}>
        <StatusBar style="dark" />
        <View style={styles.mainContainer}>
          <HeaderComponent imgName="hab-one-header" />
          <ContentComponent plainText={habText} />
          <View style={styles.rowBtns}>
            <BtnComponent
              imgName="hab-material-btn"
              imgText="Materials"
              navigation={navigation}
              routeName="MaterialsScreen"
              widthBtn={110}
              heightBtn={105}
            />
            {/* <BtnComponent
              imgName="hab-tracking-btn"
              imgText="Tracking"
              navigation={navigation}
              routeName="TrackingScreen"
              widthBtn={110}
              heightBtn={105}
            /> */}
          </View>
          <TitleComponent
            titleText="Let's create a HAB"
            maTop={25}
            maBottom={20}
          />
          <ContentComponent plainTitle={habPlainText1} plainText={habText1} />
          <ContentComponent plainTitle={habPlainText2} plainText={habText2} />
          <ContentComponent plainTitle={habPlainText3} plainText={habText3} />
          <ContentComponent plainTitle={habPlainText4} plainText={habText4} />
          <ContentComponent plainTitle={habPlainText5} plainText={habText5} />
          <ContentComponent plainTitle={habPlainText6} plainText={habText6} />
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
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#FFF",
  },
  rowBtns: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
