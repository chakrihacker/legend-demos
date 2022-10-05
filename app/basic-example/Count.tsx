import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";

const Count = ({ count, setCount }) => {
  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <>
      <Text>React Way of Increment</Text>
      <View style={styles.container}>
        <Pressable onPress={increment} style={styles.button}>
          <Text>{"+"}</Text>
        </Pressable>
        <Text style={styles.text}>{`Count: ${count}`}</Text>
        <Pressable onPress={decrement} style={styles.button}>
          <Text>{"-"}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Count;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  button: {
    borderWidth: 1,
    padding: 20,
  },
  text: {
    padding: 20,
  },
});
