import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/Login";
import { SignupScreen } from "../screens/Signup";

const AuthStackNav = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <AuthStackNav.Navigator>
      <AuthStackNav.Screen name="Login" component={LoginScreen} />
      <AuthStackNav.Screen name="SignUp" component={SignupScreen} />
    </AuthStackNav.Navigator>
  );
};
