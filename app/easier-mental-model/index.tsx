import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ChangeTitle from "./ChangeTitle";
import LSChangeTitle from "./LSChangeTitle";

const SideEffectExample = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>SideEffectExample</Text>
      <ChangeTitle />
      <LSChangeTitle />
    </View>
  );
};

export default SideEffectExample;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 12,
  },
});
