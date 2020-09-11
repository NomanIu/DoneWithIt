import React from "react";
import { Text, Platform, StyleSheet } from "react-native";
import style from "./styles";

function AppText({ children, style }) {
  return (
    <Text numberOfLines={2} style={[styles.textPadding, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  textPadding: {
    marginRight: 10,
  },
});

export default AppText;
