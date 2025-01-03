import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Button from "./Button";
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
            flex: 1,
          }}
        >
          <Item
            name="Item 1"
            style={{
              justifyContent: "flex-start",
            }}
          />
          <Item name="Item 2" />
          <Item
            name="Item 3"
            style={{
              width: "auto",
              height: "auto",
              minWidth: 100,
              minHeight: 100,
              justifyContent: "flex-end",
            }}
          />
        </Container>
        <Container
          style={{
            flexDirection: "row",
            gap: 10,
            padding: 10,
            flexWrap: "wrap",
          }}
        >
          <Button
            title="row"
            onPress={() => {
              setFlexDirection("row");
            }}
          />
          <Button
            title="row-reverse"
            onPress={() => {
              setFlexDirection("row-reverse");
            }}
          />
          <Button
            title="column"
            onPress={() => {
              setFlexDirection("column");
            }}
          />
          <Button
            title="column-reverse"
            onPress={() => {
              setFlexDirection("column-reverse");
            }}
          />
        </Container>
        <Container
          style={{
            flexDirection: "row",
            gap: 10,
            padding: 10,
            flexWrap: "wrap",
          }}
        >
          <Button
            title="flex-start"
            onPress={() => {
              setJustifyContent("flex-start");
            }}
          />
          <Button
            title="flex-end"
            onPress={() => {
              setJustifyContent("flex-end");
            }}
          />
          <Button
            title="center"
            onPress={() => {
              setJustifyContent("center");
            }}
          />
          <Button
            title="space-between"
            onPress={() => {
              setJustifyContent("space-between");
            }}
          />
          <Button
            title="space-around"
            onPress={() => {
              setJustifyContent("space-around");
            }}
          />
          <Button
            title="space-evenly"
            onPress={() => {
              setJustifyContent("space-evenly");
            }}
          />
        </Container>
        <Container
          style={{
            flexDirection: "row",
            gap: 10,
            padding: 10,
            flexWrap: "wrap",
          }}
        >
          <Button
            title="flex-start"
            onPress={() => {
              setAlignItems("flex-start");
            }}
          />
          <Button
            title="flex-end"
            onPress={() => {
              setAlignItems("flex-end");
            }}
          />
          <Button
            title="center"
            onPress={() => {
              setAlignItems("center");
            }}
          />
          <Button
            title="stretch"
            onPress={() => {
              setAlignItems("stretch");
            }}
          />
          <Button
            title="baseline"
            onPress={() => {
              setAlignItems("baseline");
            }}
          />
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
    gap: 10,
  },
});
