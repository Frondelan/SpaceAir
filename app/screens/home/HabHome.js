import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//Componets
import HeaderComponent from "../../components/HeaderComponent";
import ContentComponent from "../../components/ContentComponent";
//Data
import { homePlainText, homeText } from "../../data/contentText";

export default function HabHome() {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <ScrollView style={styles.bgContainer}>
        <View style={styles.mainContainer}></View>
        <HeaderComponent imgName="hab-header" />
        <ContentComponent plainTitle={homePlainText} plainText={homeText} />
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
