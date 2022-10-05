import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { observable, when } from "@legendapp/state";
import { observer } from "@legendapp/state/react";
import { Back } from "../components/back";

const state = observable({
  name: "Chakravarthy",
});

state.name.onChange((currName) => {
  // Add your Side Effects
  console.log({ currName });
});

const Hello = observer(({ navigation }) => {
  return (
    <View style={styles.root}>
      <Back navigation={navigation} />
      <View>
        <Text>{"Enter Your Name"}</Text>
        <TextInput
          style={styles.input}
          value={state.name.get()}
          onChangeText={(text) => state.name.set(text)}
        />
        <Text style={styles.hello}>Hello {state.name.get()}</Text>
      </View>
    </View>
  );
});

export default Hello;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    padding: 12,
  },
  hello: {
    padding: 12,
  },
});
