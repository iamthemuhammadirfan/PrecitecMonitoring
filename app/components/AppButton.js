import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import colors from "../config/colors";
import {convertWidthToDP} from "../config/utils";
import AppText from "./AppText";

export default function AppButton({onPress, style, title}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={onPress}>
      <AppText style={styles.title}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark,
    padding: convertWidthToDP("3%"),
    borderRadius: convertWidthToDP("3%"),
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    letterSpacing: convertWidthToDP("0.7%"),
    fontSize: convertWidthToDP("5%"),
  },
});
