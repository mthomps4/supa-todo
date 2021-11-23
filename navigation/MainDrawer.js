import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { HomeScreen } from "../screens/Home";
import { ProfileScreen } from "../screens/Profile";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>HELLO!</Text>
      </View>
      <DrawerItemList {...props} />
      <Button
        title="Logout"
        onPress={() => {
          props.navigation.closeDrawer();
        }}
      ></Button>
    </DrawerContentScrollView>
  );
};

const DrawerStack = createDrawerNavigator();
export const MainDrawer = () => {
  return (
    <DrawerStack.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <DrawerStack.Screen name="Home" component={HomeScreen} />
      <DrawerStack.Screen name="Profile" component={ProfileScreen} />
    </DrawerStack.Navigator>
  );
};
