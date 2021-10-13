import React from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import Cautions from "../Components/Cautions";
const Home = () => {
  return (
    <ScrollView style={styles.Screen}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText} >Covid-19</Text>
      </View>
      <Cautions />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: "10%",
  },
  HeaderText: {
    fontSize: 22,
    fontFamily: "serif",
    color: "#329F6D",
    },
  Screen: {
      flex:1,
      backgroundColor:"#fff"
  }
});
