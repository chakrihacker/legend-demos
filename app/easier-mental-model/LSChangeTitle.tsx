import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { observable } from "@legendapp/state";
import { useObserve } from "@legendapp/state/react";
import { Legend } from "@legendapp/state/react-native-components";

const user = observable({ name: "" });

const LSChangeTitle = () => {
  const renderCount = ++useRef(0).current;

  useObserve(() => {
    document.title = `Hello ${user.name.get()}`;
  });

  return (
    <View>
      <Text style={styles.text}>LSChangeTitle</Text>
      <Text style={styles.text}>{`Render Count: ${renderCount}`}</Text>
      <Legend.TextInput value$={user.name} style={styles.input} />
    </View>
  );
};

export default LSChangeTitle;

const styles = StyleSheet.create({
  text: {
    padding: 12,
  },
  input: {
    borderWidth: 1,
    padding: 12,
  },
});
