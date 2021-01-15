import React from "react";
import {Image, StyleSheet, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../config/colors";
import {convertWidthToDP} from "../../config/utils";
export default function AppTopBar({onPress}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <Icon
        name="menu"
        size={convertWidthToDP("9%")}
        color={colors.black}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: convertWidthToDP("100%"),
    backgroundColor: colors.white,
    elevation: convertWidthToDP("10%"),
    alignItems: "center",
    justifyContent: "space-between",
    padding: convertWidthToDP("1.5%"),
    flexDirection: "row",
  },
  logo: {
    width: convertWidthToDP("45%"),
  },
});
