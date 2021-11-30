import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./navigation/HomeStack";
import { AuthStack } from "./navigation/AuthStack";
import { UserContextProvider, useSession } from "./utils/authContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
export default function App() {
  const AppStack = () => {
    const { user } = useSession();
    return user ? <HomeStack /> : <AuthStack />;
  };

  return (
    <UserContextProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </UserContextProvider>
  );
}
