import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import AppDashboardCard from "../../components/AppDashboardCard";
import AppInfoCard from "../../components/AppInfoCard";
import AppScreen from "../../components/AppScreen";
import AppTopBar from "../../components/layout/AppTopBar";
import {convertHeightToDP, convertWidthToDP} from "../../config/utils";
export default function DashboardScreen() {
  return (
    <AppScreen style={{padding: convertWidthToDP("3%")}}>
      <AppTopBar />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppInfoCard
            icon="diving-scuba-tank"
            title="2"
            subTitle="Total Tanks"
          />
          <AppInfoCard icon="water" title="1000T" subTitle="Total Capacity" />
          <AppDashboardCard
            image={require("../../assets/images/pie-chart.png")}
            title="Total Inventory"
          />
          <AppDashboardCard
            image={require("../../assets/images/line-filled-chart.png")}
            title="Total Consumption Trend"
          />
          <AppDashboardCard
            image={require("../../assets/images/circular-chart.png")}
            title="Storage Capacity"
          />
          <AppDashboardCard
            image={require("../../assets/images/column-graph.png")}
            title="Monthly Inventory Trend"
          />
          <AppDashboardCard
            image={require("../../assets/images/pie-chart.png")}
            title="Monthly Consumption"
          />
          <AppDashboardCard
            image={require("../../assets/images/line-filled-chart.png")}
            title="Monthly Production"
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
