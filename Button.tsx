import React, { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
};

const Button: FC<Props> = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default Button;
