import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TrackPadNavigater from './Navigation/TrackPadNavigater'
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
  return (
    <NavigationContainer>
      <TrackPadNavigater/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
