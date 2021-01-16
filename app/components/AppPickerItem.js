import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import {convertWidthToDP} from "../config/utils";
import AppText from "./AppText";

export default function AppPickerItem({label, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: convertWidthToDP("2%"),
  },
});
