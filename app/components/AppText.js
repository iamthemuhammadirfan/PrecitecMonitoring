import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {convertWidthToDP} from "../config/utils";

export default function AppText({children, style}) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "DMSans-Regular",
    fontSize: convertWidthToDP("5%"),
  },
});
