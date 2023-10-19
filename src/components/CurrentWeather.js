import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons'; 

const CurrentWeather = () => {

  return (
    <SafeAreaView style = { styles.wrapper }>
    <View style = {styles.container}>
      <Text>Hello world!</Text>
      <Text>6</Text>
      <Text style={ styles.feels }>Feels like 5</Text>
      <Text>High : 8 Low : 6</Text>
      <Entypo name="infinity" size={100} color="blue" />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  wrapper: {
    flex: 1,
    backgroundColor: "red"
  },
  feels: {
    color: "white",
    fontSize: 50,
  }
})

export default CurrentWeather;