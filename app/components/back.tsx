import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export const Back = ({ navigation }) => {
  return (
    <Pressable onPress={navigation.goBack} style={styles.close}>
      <Text>{"❌ Close"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  close: {
    position: "absolute",
    left: 20,
    top: 20,
  },
});
