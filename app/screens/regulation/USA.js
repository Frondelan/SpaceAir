import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//Components
import ContentComponent from "../../components/ContentComponent";
//Data
import {
  regPlainText,
  regUsaText,
  regUsaSecondaryText,
  regUsaText2,
} from "../../data/contentText";

export default function USA({ navigation }) {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <ScrollView style={styles.bgContainer}>
        <View style={styles.mainContainer}>
          <ContentComponent
            sdTitle={true}
            plainTitle={regPlainText}
            plainText={regUsaText}
          />
          <ContentComponent
            sdTitle={false}
            plainTitle={regUsaSecondaryText}
            plainText={regUsaText}
          />
          <ContentComponent plainText={regUsaText2} />
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
});
