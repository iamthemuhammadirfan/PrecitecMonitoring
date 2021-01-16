import React from "react";
import {Image, StyleSheet, View} from "react-native";
import colors from "../config/colors";
import {convertHeightToDP, convertWidthToDP} from "../config/utils";
import AppText from "./AppText";

export default function AppDashboardCard({title, image, onBottomTitle, info}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: onBottomTitle ? "column-reverse" : "column",
          alignItems: "center",
        }}>
        <AppText
          style={[
            styles.title,
            {
              marginBottom: onBottomTitle ? 0 : convertHeightToDP("2%"),
              marginTop: onBottomTitle ? convertHeightToDP("3%") : 0,
            },
          ]}>
          {title}
        </AppText>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      {info && (
        <View style={styles.infoContainer}>
          <View style={styles.titleLane}>
            <AppText style={{color: colors.primary, fontWeight: "bold"}}>
              Material:
            </AppText>
            <AppText style={{color: colors.primary, fontWeight: "bold"}}>
              Level(m):
            </AppText>
          </View>
          <View style={styles.titleLane}>
            <AppText style={{color: colors.medium}}>{info.material}</AppText>
            <AppText style={{color: colors.medium}}>{info.level}</AppText>
          </View>
          <View style={styles.titleLane}>
            <AppText style={{color: colors.primary, fontWeight: "bold"}}>
              Mass(Kg):
            </AppText>
            <AppText style={{color: colors.primary, fontWeight: "bold"}}>
              Volume(L):
            </AppText>
          </View>
          <View style={styles.titleLane}>
            <AppText style={{color: colors.medium}}>{info.mass}</AppText>
            <AppText style={{color: colors.medium}}>{info.volume}</AppText>
          </View>
          <View style={styles.titleLane}>
            <AppText style={{color: colors.primary, fontWeight: "bold"}}>
              Temprature(C):
            </AppText>
          </View>
          <View style={styles.titleLane}>
            <AppText style={{color: colors.medium}}>{info.temprature}</AppText>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: convertWidthToDP("2%"),
    backgroundColor: colors.white,
    padding: convertWidthToDP("5%"),
    marginVertical: convertHeightToDP("2%"),
  },
  title: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: convertWidthToDP("6%"),
  },
  titleLane: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: convertHeightToDP("0.5%"),
  },
  image: {
    width: "100%",
  },
  infoContainer: {},
});
