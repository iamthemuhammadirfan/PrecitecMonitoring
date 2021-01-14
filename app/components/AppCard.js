import React from "react";
import {
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../config/colors";
import {convertHeightToDP, convertWidthToDP} from "../config/utils";
import AppText from "./AppText";
export default function AppCard({image, style, title, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Animated.View style={[styles.card, style]}>
        <Image source={image} resizeMode="contain" style={styles.image} />
        <AppText style={styles.title}>{title}</AppText>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: convertWidthToDP("4%"),
    elevation: convertWidthToDP("5%"),
    paddingVertical: convertHeightToDP("5%"),
    width: convertWidthToDP("84%"),
    height: convertWidthToDP("80%"),
    marginHorizontal: convertWidthToDP("5%"),
  },
  image: {
    width: convertWidthToDP("50%"),
    alignSelf: "center",
    marginBottom: convertHeightToDP("5%"),
  },
  title: {
    fontSize: convertWidthToDP("6%"),
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: colors.dark,
    textShadowOffset: {
      width: convertWidthToDP("0.7%"),
      height: convertHeightToDP("0.7%"),
    },
    textShadowRadius: convertWidthToDP("5%"),
  },
});
