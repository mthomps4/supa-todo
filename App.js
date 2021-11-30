import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./navigation/HomeStack";
import { AuthStack } from "./navigation/AuthStack";
import { UserContextProvider, useSession } from "./utils/authContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const AppStack = () => {
    const { user } = useSession();
    return user ? <HomeStack /> : <AuthStack />;
  };

  return (
    <UserContextProvider>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </UserContextProvider>
  );
}
