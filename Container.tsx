import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: ViewStyle;
  children?: React.ReactNode;
};

const Container: FC<Props> = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: "#fff",
  },
});

export default Container;
