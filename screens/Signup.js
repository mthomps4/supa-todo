import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Icon, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { supabase } from "../utils/supabase";

export const SignupScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSignup = async () => {
    setSubmitting(true);

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.log(error);
    }

    setSubmitting(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Input
          placeholder="Email"
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="blue.400"
            />
          }
          size="sm"
          varient="outline"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isRequired
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isRequired
        />

        <Button
          onPress={handleSignup}
          isLoading={submitting}
          isLoadingText="Creating..."
        >
          Sign Up
        </Button>
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
