import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CovidResults from '../Components/CovidResults';

const CovidStatistics = ({ navigation }) => {
  const nav = navigation.navigate
  return (
      <View style={styles.Screen} >
        <CovidResults navigate={nav} />
      </View>
    );
}

export default CovidStatistics

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop:40
    }
})
