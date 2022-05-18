import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function LogoComponent() {
  return (
    <View style={styles.imgContainer}>
      <Image
        style={styles.logoImg}
        source={require("../../../assets/splashscreen/spaceAir.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    marginBottom: 15,
    backgroundColor: "#E4E4E4",
  },
  logoImg: {
    width: 110,
    height: 110,
  },
});
