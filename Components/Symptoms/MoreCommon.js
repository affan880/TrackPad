import React from "react";
import { StyleSheet, Text, View } from "react-native";
const MoreCommon = () => {
  return (
    <View style={styles.LessCommonScreen}>
      <Text style={styles.Titlesymptoms}>Aches and pains</Text>
      <Text style={styles.Titlesymptoms}>Sore throat</Text>
      <Text style={styles.Titlesymptoms}>Diarrhoea</Text>
      <Text style={styles.Titlesymptoms}>conjunctivitis</Text>
      <Text style={styles.Titlesymptoms}>headache</Text>
      <Text style={styles.Titlesymptoms}>loss of taste or smell</Text>
      <Text style={styles.Titlesymptoms}>
        a rash on skin, or discolouration of fingers or toes
      </Text>
    </View>
  );
};

export default MoreCommon;

const styles = StyleSheet.create({
    LessCommonScreen: {
    margin: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
  },
  Titlesymptoms: {
    fontSize: 10,
    fontFamily: "serif",
    padding: 4,
  },
});
