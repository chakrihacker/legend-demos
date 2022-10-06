import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Memo, observer, Show, useObservable } from "@legendapp/state/react";
import { useTraceListeners, useTraceUpdates } from "@legendapp/state/trace";

const LSInput = observer(({ value, error }) => {
  const renderCount = ++useRef(0).current;
  const state = useObservable({ touched: false });

  return (
    <View>
      <Text style={styles.text}>Enter your mobile number {renderCount}</Text>
      <Memo>
        {() => (
          <TextInput
            style={styles.input}
            value={value.get()}
            onChangeText={(text) => value.set(text)}
            onBlur={() => state.touched.set(true)}
          />
        )}
      </Memo>
      <Show if={state.touched}>
        {() => <Text style={styles.error}>{error.get()}</Text>}
      </Show>
    </View>
  );
});

export default LSInput;

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
