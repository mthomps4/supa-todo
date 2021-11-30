import React, { useLayoutEffect } from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Heading } from "native-base";
import { useSession } from "../utils/authContext";

const MyModal = ({ isVisible, onClick }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      presentationStyle="overFullScreen"
      transparent={false}
    >
      <SafeAreaView style={styles.modalContainer}>
        <Text style={{ paddingTop: 20, fontSize: 22 }}>IN MODAL</Text>
        <Button onPress={onClick} title="CLOSE"></Button>
      </SafeAreaView>
    </Modal>
  );
};

export const HomeScreen = ({ navigation }) => {
  const [showModal, setShowModal] = React.useState(false);
  const { user } = useSession();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="ADD" onPress={() => setShowModal(true)}></Button>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* MODAL */}
      <MyModal isVisible={showModal} onClick={() => setShowModal(false)} />
      {/* PAGE CONTENT */}
      <Heading size="xl">Welcome, {user.email}!</Heading>

      <Text>Click to see Details!</Text>
      <StatusBar style="auto" />
      <Button
        title="Details page"
        onPress={() => navigation.navigate("Detail")}
      ></Button>
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
  modalContainer: {
    flex: 1,
    alignItems: "center",
    borderRadius: 18,
  },
});
