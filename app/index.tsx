import { StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>Legend Demos</Text>
      <Link style={styles.link} href={"/getting-started"}>
        {"1. Getting Started"}
      </Link>
      <Link style={styles.link} href={"/stable-ref-problem"}>
        {"2. Stable Ref Problem"}
      </Link>
      <Link style={styles.link} href={"/fine-grained-reactivity"}>
        {"3. Fine Grained Reactivity"}
      </Link>
      <Link style={styles.link} href={"/easier-mental-model"}>
        {"4. Easier Mental Model"}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
  },
  link: {
    fontSize: 20,
    color: "blue",
    textDecorationLine: "underline",
    padding: 5,
  },
});
