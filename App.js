import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {

  return (
    <SafeAreaView style = {{ flex:1 }}>
    <View style = {styles.container}>
      <Text>Hello world!</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default App;