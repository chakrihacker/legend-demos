import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Count from "./Count";
import LSCount from "./LSCount";
import { observable } from "@legendapp/state";

const countStore = observable({
  count: 0,
});

const BasicExample = () => {
  const renderCount = useRef(0).current++;
  const [count, setCount] = useState(0);

  return (
    <View style={styles.root}>
      <Text>{`Parent Component Render Count: ${renderCount} \n\n`}</Text>
      <Count count={count} setCount={setCount} />
      <LSCount count={countStore.count} />
    </View>
  );
};

export default BasicExample;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
