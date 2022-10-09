import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { computed, observable } from "@legendapp/state";
import Input from "./Input";
import LSInput from "./LSInput";

const state = observable({
  mobileNumber: "",
});

const errors = computed(() => {
  const isInvalid = state.mobileNumber.get().length !== 10;
  return {
    // ...(isInvalid && { mobileNumber: "Please Enter Valid Mobile Number" }),
    mobileNumber: isInvalid ? "Please Enter Valid Mobile Number" : "",
  };
});

const TextInputExample = () => {
  const renderCount = ++useRef(0).current;

  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (text) => {
    if (text.length !== 10) {
      setErrorMessage("Please Enter Valid Mobile Number");
    } else {
      setErrorMessage("");
    }
    setMobileNumber(text);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.text}>{`Render Count: ${renderCount}`}</Text>
      <Text style={styles.text}>Fine Grained Reactivity</Text>
      <Input
        value={mobileNumber}
        onChangeText={handleChange}
        errorMessage={errorMessage}
      />
      <LSInput value={state.mobileNumber} error={errors.mobileNumber} />
    </View>
  );
};

export default TextInputExample;

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
