import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height - 500;

const Preventions = () => {
  return <View style={styles.PreventionsDiv}>
    <Text style={styles.PreventionsTitle}>Preventions :-</Text>
  </View>;
};

const styles = StyleSheet.create({
  PreventionsDiv: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    height: windowHeight,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: "#329F6D",
  },
  PreventionsTitle: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Preventions;
