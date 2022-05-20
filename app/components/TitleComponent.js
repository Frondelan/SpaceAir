import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TitleComponent(props) {
  const { sdTitle = true, titleText, maTop = 0, maBottom = 0 } = props;
  return (
    <View
      style={[
        styles.mainContiner,
        { marginTop: maTop, marginBottom: maBottom },
      ]}
    >
      <Text style={sdTitle ? styles.mainTitle : styles.secondaryTitle}>
        {titleText}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContiner: {
    marginLeft: 12,
    marginRight: 12,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: 29,
  },
  secondaryTitle: {
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 7,
  },
});
