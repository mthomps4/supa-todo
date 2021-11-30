import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { supabase } from "../utils/supabase";

export const SignupScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Input
          placeholder="Email"
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          leftIcon={{ type: "font-awesome", name: "envelope" }}
        />

        <Input
          placeholder="Password"
          label="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
          passwordRules="required: upper; required: lower; minlength: 8"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          secureTextEntry={true}
        />

        <Button
          title="Sign Up"
          onPress={handleSignup}
          icon={
            <Icon
              name="user"
              size={20}
              color="white"
              style={{ paddingRight: 8 }}
            />
          }
        />
      </View>
      <View>
        <Text>
          Already a user?{" "}
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text>Login</Text>
          </Pressable>
        </Text>
      </View>
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
