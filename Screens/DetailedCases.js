import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailedCases = (navigation) => {
    return (
      <View style={styles.Screen}>
        <Text>{navigation.route.params.name}</Text>
      </View>
    );
}

export default DetailedCases

const styles = StyleSheet.create({
    screen: {
        alignItems: "center",
        justifyContent:"center"
    }
})
