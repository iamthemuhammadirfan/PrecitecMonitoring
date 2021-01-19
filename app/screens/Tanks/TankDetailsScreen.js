import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import AppDashboardCard from "../../components/AppDashboardCard";
import AppScreen from "../../components/AppScreen";
import AppTopBar from "../../components/layout/AppTopBar";
import {convertWidthToDP, convertHeightToDP} from "../../config/utils";
export default function TankDetailsScreen({navigation}) {
  const data = {
    material: "Diesel",
    level: "0.13",
    mass: "0",
    volume: "538.1",
    temprature: "0",
  };
  return (
    <AppScreen style={{padding: convertWidthToDP("3%")}}>
      <AppTopBar onPress={() => navigation.openDrawer()} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppDashboardCard
            image={require("../../assets/images/storage-tank.png")}
            title="Diesel Tank"
            info={data}
            onBottomTitle
          />
          <AppDashboardCard
            image={require("../../assets/images/circular-chart.png")}
            title="Storage Capacity"
          />
          <AppDashboardCard
            image={require("../../assets/images/line-graph.png")}
            title="Daily Inventry Trend"
          />
          <AppDashboardCard
            image={require("../../assets/images/column-graph.png")}
            title="Daily Consumption"
          />
          <AppDashboardCard
            image={require("../../assets/images/column-graph.png")}
            title="Daily Production"
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
