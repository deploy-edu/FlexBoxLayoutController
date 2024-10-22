import { SafeAreaView, StyleSheet, View } from "react-native";
import Container from "./Container";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.rootContainer}>
        <Container></Container>
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
