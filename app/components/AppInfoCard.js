import React from "react";
import {StyleSheet, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import {convertHeightToDP, convertWidthToDP} from "../config/utils";
import AppText from "./AppText";
export default function AppInfoCard({icon, title, subTitle}) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name={icon} size={convertWidthToDP("10%")} color={colors.white} />
      </View>
      <View style={styles.textContainer}>
        <AppText style={{fontWeight: "bold", fontSize: convertWidthToDP("5%")}}>
          {title}
        </AppText>
        <AppText
          style={{fontSize: convertWidthToDP("4%"), color: colors.medium}}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: convertWidthToDP("4%"),
    borderRadius: convertWidthToDP("2%"),
    width: "100%",
    flexDirection: "row",
    marginBottom: convertHeightToDP("1%"),
    elevation: convertWidthToDP("2%"),
  },
  icon: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: convertWidthToDP("1%"),
    borderRadius: convertWidthToDP("3%"),
  },
  textContainer: {
    marginLeft: convertWidthToDP("4%"),
    justifyContent: "center",
  },
});
