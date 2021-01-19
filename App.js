/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import TankReportScreen from "./app/screens/Tanks/TankReportScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TankDashboardScreen from "./app/screens/Tanks/TankDashboardScreen";
import TankListScreen from "./app/screens/Tanks/TankListScreen";
import TankDetailsScreen from "./app/screens/Tanks/TankDetailsScreen";
import {NavigationContainer} from "@react-navigation/native";
const TankNavigation = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TankNavigation.Navigator initialRouteName="TankDashboard">
        <TankNavigation.Screen
          name="TankDashboard"
          component={TankDashboardScreen}
        />
        <TankNavigation.Screen name="TankList" component={TankListScreen} />
        <TankNavigation.Screen
          name="TankDetails"
          component={TankDetailsScreen}
        />
        <TankNavigation.Screen name="TankReport" component={TankReportScreen} />
      </TankNavigation.Navigator>
    </NavigationContainer>
  );
}
