import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";

const App = () => {

  return (
    <View style={ styles.container }>
      <UpcomingWeather />
      <CurrentWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;