import React from "react";
import { StyleSheet, View, TextInput,TouchableOpacity } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
const TextINPUT = ({ input, setinput, reset, submit }) => {
  return (
    <View style={styles.Screen}>
      <View style={styles.Input}>
        <TextInput
          style={styles.TxtInpt}
          placeholder="Search by country..."
          textAlign="center"
          value={input}
          onChangeText={setinput}
          onEndEditing={submit}
        />
        <Entypo
          name="cross"
          size={24}
          color="grey"
          style={styles.reset}
          onPress={reset}
        />
      </View>
      <TouchableOpacity style={styles.SearchBtn} >
      <Ionicons
        name="search"
        color="#fff"
        size={24}
        style={styles.SrchIcon}
        onPress={submit}
        />
        </TouchableOpacity>
    </View>
  );
};

export default TextINPUT;

const styles = StyleSheet.create({
  Screen: {
    flexDirection: "row",
  },
  Input: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#329F6D",
    height: 40,
    borderRadius: 12,
    marginRight: 10,
    marginLeft: 15,
    marginVertical: 20,
  },
  TxtInpt: {
    width: "75%",
    marginHorizontal: 3,
    alignItems: "stretch",
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  SrchIcon: {
    padding: 6,
    marginHorizontal: 0,
  },
  reset: {
    position: "relative",
    left: 25,
    alignSelf: "center",
    marginLeft: 10,
  },
  SearchBtn: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#329F6D",
    borderRadius: 10,
    backgroundColor:"#329F6D"
  },
});
