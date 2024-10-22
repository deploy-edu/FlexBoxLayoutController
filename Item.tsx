import React, { FC } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

type Props = {
  style?: ViewStyle;
  name: string;
};

const Item: FC<Props> = ({ style, name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Item;
