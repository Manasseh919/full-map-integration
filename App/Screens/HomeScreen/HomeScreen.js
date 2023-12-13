import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppMapView from './AppMapView'
import Header from './Header'

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header/>
      </View>
      <AppMapView/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerContainer:{
    position:'absolute',
    zIndex:10,
    padding:10,
    width:'100%',
    paddingHorizontal:20
  }
})