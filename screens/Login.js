import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Icon, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { supabase } from "../utils/supabase";

export const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async () => {
    setSubmitting(true);
    const { error } = await supabase.auth.signIn({ email, password });

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
          // InputLeftElement={
          //   <Icon
          //     as={<MaterialIcons name="person" />}
          //     size={5}
          //     margin="3"
          //     color="blue.400"
          //   />
          // }
          size="md"
          mb="4"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isRequired
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          mb="4"
          onChange={(e) => setPassword(e.target.value)}
          isRequired
        />

        <Button
          onPress={handleLogin}
          isLoading={submitting}
          isLoadingText="Logging in..."
        >
          Login
        </Button>
      </View>
      <View>
        <Text>
          Not a user?{" "}
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text>Sign Up!</Text>
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
