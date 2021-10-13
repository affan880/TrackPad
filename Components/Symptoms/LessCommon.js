import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageSlider from "react-native-image-slider";
const LessCommon = () => {
    return (
      <View style={styles.LessCommonScreen} >
        <Text style={styles.Titlesymptoms}>Fever</Text>
        <Text style={styles.Titlesymptoms}>Dry Cough</Text>
        <Text style={styles.Titlesymptoms}>Tiredness</Text>
      </View>
    );
}

export default LessCommon

const styles = StyleSheet.create({
    LessCommonScreen: {
        margin:10,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius:20
    },
    Titlesymptoms: {
        fontSize: 22,
        fontFamily: "serif",
        padding:12
    }
})
