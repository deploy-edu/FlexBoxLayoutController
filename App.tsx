import { SafeAreaView, StyleSheet, View } from "react-native";
import Container from "./Container";
import Item from "./Item";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.rootContainer}>
        <Container
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
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
