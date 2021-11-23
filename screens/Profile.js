import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Profile screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});