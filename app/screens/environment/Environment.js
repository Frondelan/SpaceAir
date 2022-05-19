import React from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//Components
import HeaderComponent from "../../components/HeaderComponent";
import ContentComponent from "../../components/ContentComponent";
//Data
import {
  envPlainText,
  envText,
  envPlainText2,
  envText2,
  envPlainText3,
  envText3,
  envPlainText4,
  envText4,
  envPlainText5,
  envText5,
  envPlainText6,
  envText6,
} from "../../data/contentText";

export default function Environment({ navigation }) {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <ScrollView style={styles.bgContainer}>
        <View style={styles.mainContainer}>
          <HeaderComponent imgName="ev-header" />
          <ContentComponent
            sdTitle={true}
            plainTitle={envPlainText}
            plainText={envText}
          />
          <Image
            style={styles.imgEnv}
            source={require("../../../assets/headers/ev-example-1.jpeg")}
          />
          <ContentComponent
            sdTitle={false}
            plainTitle={envPlainText2}
            plainText={envText2}
          />
          <View>
            <Text style={styles.mainTitle}>
              Environmental problems with plastic
            </Text>
          </View>
          <Image
            style={styles.imgEnv}
            source={require("../../../assets/headers/ev-example-2.jpeg")}
          />
          <ContentComponent
            sdTitle={false}
            plainTitle={envPlainText3}
            plainText={envText3}
          />
          <ContentComponent
            sdTitle={false}
            plainTitle={envPlainText4}
            plainText={envText4}
          />
          <ContentComponent
            sdTitle={false}
            plainTitle={envPlainText5}
            plainText={envText5}
          />
          <ContentComponent
            sdTitle={false}
            plainTitle={envPlainText6}
            plainText={envText6}
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
  imgEnv: {
    width: 360,
    height: 200,
    marginBottom: 25,
  },
  mainTitle: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 27,
    marginTop: 20,
    marginBottom: 20,
  },
});
