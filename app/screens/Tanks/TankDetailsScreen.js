import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import AppDashboardCard from "../../components/AppDashboardCard";
import AppScreen from "../../components/AppScreen";
import AppTopBar from "../../components/layout/AppTopBar";
import {convertWidthToDP, convertHeightToDP} from "../../config/utils";
export default function TankDetailsScreen() {
  const data = {
    material: "Diesel",
    level: "0.13",
    mass: "0",
    volume: "538.1",
    temprature: "0",
  };
  return (
    <AppScreen style={{padding: convertWidthToDP("3%")}}>
      <AppTopBar />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppDashboardCard
            image={require("../../assets/images/storage-tank.png")}
            title="Diesel Tank"
            info={data}
            onBottomTitle
          />
        </ScrollView>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: convertHeightToDP("10%"),
  },
});
