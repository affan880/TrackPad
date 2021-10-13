import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Serious = () => {
  return (
    <View style={styles.LessCommonScreen}>
      <Text style={styles.Titlesymptoms}>
        difficulty breathing or shortness of breath
      </Text>
      <Text style={styles.Titlesymptoms}>chest pain or pressure</Text>
      <Text style={styles.Titlesymptoms}>loss of speech or movement</Text>
    </View>
  );
};

export default Serious;

const styles = StyleSheet.create({
  LessCommonScreen: {
    margin: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
  },
  Titlesymptoms: {
    fontSize: 22,
    fontFamily: "serif",
    padding: 12,
  },
});
