import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//Components
import HeaderComponent from "../../components/HeaderComponent";

export default function Regulation({ navigation }) {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <ScrollView style={styles.bgContainer}>
        <View>
          <HeaderComponent imgName="reg-header" />
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
