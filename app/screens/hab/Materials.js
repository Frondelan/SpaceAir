import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//Components
import ContentComponent from "../../components/ContentComponent";
import MaterialComponent from "../../components/hab/MaterialComponent";

//Data
import {
  materialPlainText,
  materialText,
  materialPlainText1,
  materialText1,
  materialPlainText2,
  materialText2,
  materialPlainText3,
  materialText3,
  materialPlainText4,
  materialText4,
  materialPlainText5,
  materialText5,
  materialPlainText6,
  materialText6,
  materialPlainText7,
  materialText7,
} from "../../data/contentText";

export default function Materials() {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <ScrollView style={styles.bgContainer}>
        <View style={styles.mainContainer}>
          <ContentComponent
            plainTitle={materialPlainText}
            plainText={materialText}
          />
          <MaterialComponent
            plainTitle={materialPlainText1}
            plainText={materialText1}
            imgName="balloon"
          />
          <MaterialComponent
            plainTitle={materialPlainText2}
            plainText={materialText2}
            imgName="pchute"
          />
          <MaterialComponent
            plainTitle={materialPlainText3}
            plainText={materialText3}
            imgName="gps"
          />
          <MaterialComponent
            plainTitle={materialPlainText4}
            plainText={materialText4}
            imgName="camera"
          />
          <MaterialComponent
            plainTitle={materialPlainText5}
            plainText={materialText5}
            imgName="helium"
          />
          <MaterialComponent
            plainTitle={materialPlainText6}
            plainText={materialText6}
            imgName="polar"
          />
          <MaterialComponent
            plainTitle={materialPlainText7}
            plainText={materialText7}
            imgName="string"
          />
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
