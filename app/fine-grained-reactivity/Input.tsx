import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";

const Input = ({ value, onChangeText, errorMessage }) => {
  const renderCount = ++useRef(0).current;
  const [isTouched, setIsTouched] = useState(false);
  const showError = Boolean(isTouched && errorMessage);
  return (
    <View>
      <Text style={styles.text}>Enter your Mobile Number {renderCount}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onBlur={() => setIsTouched(true)}
      />
      {showError && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

Input.whyDidYouRender = true;

export default Input;

const styles = StyleSheet.create({
  text: {
    padding: 12,
  },
  input: {
    borderWidth: 1,
    padding: 12,
  },
  error: {
    color: "red",
    padding: 4,
  },
});
