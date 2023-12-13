import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchBar = () => {
  return (
    <View>
      <GooglePlacesAutocomplete
      placeholder='Search Responder'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})

// AIzaSyBxJSYG30djd46W6PwKGhRSi59e9NuSuBI