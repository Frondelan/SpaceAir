import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//Components
import HeaderComponent from "../../components/HeaderComponent";
import ContentComponent from "../../components/ContentComponent";
//Data
import {
  homePlainText2,
  homeText2,
  homePlainText3,
  homeText3,
  homePlainText4,
  homeText4,
  homePlainText5,
  homeText5,
} from "../../data/contentText";

export default function HabTypes() {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <ScrollView style={styles.bgContainer}>
        <HeaderComponent imgName="hab-example-1" />
        <ContentComponent plainTitle={homePlainText2} />
        <ContentComponent
          sdTitle={false}
          plainTitle={homePlainText3}
          plainText={homeText3}
        />
        <ContentComponent
          sdTitle={false}
          plainTitle={homePlainText4}
          plainText={homeText4}
        />
        <ContentComponent
          sdTitle={false}
          plainTitle={homePlainText5}
          plainText={homeText5}
        />
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
});
