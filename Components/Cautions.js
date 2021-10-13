import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Symptoms from './Symptoms'
import Preventions from './Preventions'
const Cautions = () => {
    return (
        <View style={styles.Cautions} >
            <Symptoms />
            <Symptoms />
            <Preventions/>
            <Preventions/>
        </View>
    )
}

export default Cautions

const styles = StyleSheet.create({
})
