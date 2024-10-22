import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Container from "./Container";
import Item from "./Item";

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type AlignItems = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

export default function App() {
  const [flexDirection, setFlexDirection] = useState<FlexDirection>("row");
  const [justifyContent, setJustifyContent] =
    useState<JustifyContent>("flex-start");
  const [alignItems, setAlignItems] = useState<AlignItems>("flex-start");

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.rootContainer}>
        <Container
          style={{
            flexDirection,
            justifyContent,
            alignItems,
          }}
        >
          <Item name="Item 1" />
          <Item name="Item 2" />
          <Item name="Item 3" />
        </Container>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});
