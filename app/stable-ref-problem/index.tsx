import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Count from "./Count";
import LSCount from "./LSCount";
import { observable } from "@legendapp/state";
import { Back } from "../components/back";

const countStore = observable({
  count: 0,
});

const BasicExample = ({ navigation }) => {
  const renderCount = useRef(0).current++;
  const [count, setCount] = useState(0);

  return (
    <View style={styles.root}>
      <Back navigation={navigation} />
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
