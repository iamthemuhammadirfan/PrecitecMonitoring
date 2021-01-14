import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import colors from "../config/colors";

export default function AppScreen({children, style}) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex: 1,
  },
});
