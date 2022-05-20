import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ContentComponent(props) {
  const { sdTitle = true, plainTitle, plainText } = props;

  return (
    <View style={styles.mainContiner}>
      <Text style={sdTitle ? styles.mainTitle : styles.secondaryTitle}>
        {plainTitle}
      </Text>
      <Text style={styles.contentText}>{plainText}</Text>
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
    marginTop: 20,
    marginBottom: 20,
  },
  secondaryTitle: {
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 7,
  },
  contentText: {
    marginBottom: 17,
    fontSize: 17.5,
  },
});
