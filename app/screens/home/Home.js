import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//Components
import LogoComponent from "../../components/home/LogoComponent";
import SectionHomeComponent from "../../components/home/SectionHomeComponent";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <ScrollView style={styles.bgContainer}>
        <View style={styles.mainContainer}>
          <LogoComponent />
          <SectionHomeComponent navigation={navigation} />
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
});
