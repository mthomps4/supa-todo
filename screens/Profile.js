import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useSession } from "../utils/authContext";
import { Center } from "native-base";

export const ProfileScreen = ({ navigation }) => {
  const { user } = useSession();

  console.log({ user });
  return (
    <Center flex={1} px="3">
      {/* <Center
        bg="primary.400"
        height={200}
        width={{
          base: 200,
          lg: 400,
        }}
      > */}
      <Text> Email: {user.email} </Text>
      {/* </Center> */}
    </Center>
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
