import { Pressable, StyleSheet, Text, View } from "react-native";

import { ObservablePrimitiveChild } from "@legendapp/state";
import React from "react";
import { Memo, observer } from "@legendapp/state/react";

// const LSText = observer(({ value, ...rest }) => {
//   return <Text {...rest}>{`Count: ${value.get()}`}</Text>;
// });

const LSCount = observer(
  ({ count }: { count: ObservablePrimitiveChild<number> }) => {
    const increment = () => {
      count.set?.((prevCount) => prevCount + 1);
    };

    const decrement = () => {
      count.set?.((prevCount) => prevCount - 1);
    };

    return (
      <>
        <Text>Legend Way of Increment</Text>

        <View style={styles.container}>
          <Pressable onPress={increment} style={styles.button}>
            <Text>{"+"}</Text>
          </Pressable>
          <Text style={styles.text}>{`Count: ${count.get()}`}</Text>
          {/* <LSText style={styles.text} value={count} /> */}
          {/* <Memo>
            {() => <Text style={styles.text}>{`Count: ${count.get()}`}</Text>}
          </Memo> */}
          <Pressable onPress={decrement} style={styles.button}>
            <Text>{"-"}</Text>
          </Pressable>
        </View>
      </>
    );
  }
);

export default LSCount;

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
