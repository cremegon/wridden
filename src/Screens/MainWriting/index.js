import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Modal } from "react-native";
import { StatusBar } from "react-native";
import DismissKeyboard from "../../Components/DismissKeyboard";
import { ArcGraph } from "../../Components/ArcGraph";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const MainWriting = () => {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <TextInput style={styles.title} placeholder="Title" multiline={true} />
        <TextInput
          style={styles.notes}
          placeholder="Note"
          multiline={true}
          enablesReturnKeyAutomatically
        />
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    paddingVertical: 20,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  notes: {
    fontSize: 18,
    paddingTop: 0,
    paddingLeft: 25,
  },
  BGModal: {
    flex: 1,
    backgroundColor: "blue",
  },
  modal: {
    paddingTop: 50,
  },
});

export default MainWriting;
