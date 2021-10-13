import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
const windowHeight = Dimensions.get("window").height - 500;
const Statistics = (props) => {
  const data = props.Data;
  const Flag = data.countryInfo.flag;
  return (
    <View style={styles.Screen}>
      <View style={styles.SelectedCountry}>
        <View style={styles.Flag}>
          <Image source={{ uri: Flag }} style={styles.SelectedCountryFlag} />
        </View>
        <Text
          style={{
            alignSelf: "center",
            paddingLeft: 30,
            fontSize: 22,
            fontFamily: "serif",
            color: "#fff",
          }}
        >
          {data.country}
        </Text>
      </View>
      <View style={styles.stats}>
        <View style={styles.Statistic}>
          <Text style={[styles.statsTitle, { color: "#A20A0A" }]}>
            Infected
          </Text>
          <Text style={styles.CasesTitle}>{data.cases}</Text>
        </View>
        <View style={styles.Statistic}>
          <Text style={[styles.statsTitle, { color: "#01C5C4" }]}>
            Recovered
          </Text>
          <Text style={styles.CasesTitle}>{data.recovered}</Text>
        </View>
        <View style={styles.Statistic}>
          <Text style={[styles.statsTitle, { color: "#DFEEEA" }]}>Deaths</Text>
          <Text style={styles.CasesTitle}>{data.deaths}</Text>
        </View>
      </View>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  Flag: {
    marginLeft: 10,
    alignSelf: "center",
    flexDirection: "row",
  },
  Screen: {
    height: windowHeight,
    width: "90%",
    marginHorizontal: 10,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#329F6D",
  },
  SelectedCountry: {
    flexDirection: "row",
    width: "95%",
    margin: 10,
    height: "40%",
    borderBottomWidth: 3,
    borderBottomColor: "#B3B5BD",
    borderRadius: 1,
  },
  SelectedCountryFlag: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  Statistic: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom:100
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statsTitle: {
    fontSize: 25,
    fontFamily: "serif",
    paddingVertical: 20,
  },
  CasesTitle: {
    color: "#F2EDD7",
    fontSize:15
  },
});
