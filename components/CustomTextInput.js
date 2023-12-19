import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CustomTextInput = ({ placeholder, hidePassword = false, customStyle }) => {

  return (
    <TextInput
      style={{ ...styles.input, ...customStyle }}
      placeholder={placeholder}
      placeholderTextColor="black"
      secureTextEntry={hidePassword}
    // backgroundColor="white"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white"
  },
})

export default CustomTextInput
