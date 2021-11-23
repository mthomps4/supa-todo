import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./navigation/HomeStack";
import { AuthStack } from "./navigation/AuthStack";

export default function App() {
  const [auth, setAuth] = useState(true);

  return (
    <NavigationContainer>
      {auth ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
