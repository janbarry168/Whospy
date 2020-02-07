import React from "react";
import { StyleSheet, Button, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button onPress={() => console.log("hi")} title="開始遊戲" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
