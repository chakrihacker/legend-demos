import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const ChangeTitle = () => {
  const renderCount = ++useRef(0).current;
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Hello ${name}`;
  }, [name]);

  return (
    <View>
      <Text style={styles.text}>ChangeTitle</Text>
      <Text style={styles.text}>{`Render Count: ${renderCount}`}</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
    </View>
  );
};

export default ChangeTitle;

const styles = StyleSheet.create({
  text: {
    padding: 12,
  },
  input: {
    borderWidth: 1,
    padding: 12,
  },
});
