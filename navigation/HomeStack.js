import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainDrawer } from "./MainDrawer";
import { DetailScreen } from "../screens/Details";

const HomeStackNav = createNativeStackNavigator();
export const HomeStack = () => {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen
        name="Main Drawer"
        component={MainDrawer}
        options={{ headerShown: false }}
      />
      <HomeStackNav.Screen name="Detail" component={DetailScreen} />
    </HomeStackNav.Navigator>
  );
};
