import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from './components/Navbar'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Text>
      this is cool
    </Text>
    </View>
   

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
