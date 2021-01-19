import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import AppDashboardCard from "../../components/AppDashboardCard";
import AppInfoCard from "../../components/AppInfoCard";
import AppScreen from "../../components/AppScreen";
import AppTopBar from "../../components/layout/AppTopBar";
import {convertWidthToDP, convertHeightToDP} from "../../config/utils";
export default function TankListScreen({navigation}) {
  return (
    <AppScreen style={{padding: convertWidthToDP("3%")}}>
      <AppTopBar onPress={() => navigation.openDrawer()} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppInfoCard
            icon="diving-scuba-tank"
            title="2"
            subTitle="Total Tanks"
          />
          <AppDashboardCard
            image={require("../../assets/images/storage-tank.png")}
            title="Diesel Tank"
            onBottomTitle
          />
          <AppDashboardCard
            image={require("../../assets/images/storage-tank.png")}
            title="Petrol Tank"
          />
          <AppDashboardCard
            image={require("../../assets/images/storage-tank.png")}
            title="Storage Tank"
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
