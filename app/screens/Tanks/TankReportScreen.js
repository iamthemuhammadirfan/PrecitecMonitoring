import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import AppPicker from "../../components/AppPicker";
import AppScreen from "../../components/AppScreen";
import AppTopBar from "../../components/layout/AppTopBar";
import {convertWidthToDP, convertHeightToDP} from "../../config/utils";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
const tanks = [
  {
    label: "Tank 1",
    value: 1,
  },
  {
    label: "Tank 2",
    value: 2,
  },
  {
    label: "Tank 3",
    value: 3,
  },
];
export default function TankReportScreen() {
  const [selectedItem, setSelectedItem] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [displayedDate, setDisplayedDate] = useState(moment());
  return (
    <AppScreen style={styles.screen}>
      <AppTopBar />
      <View style={styles.container}>
        <AppPicker
          items={tanks}
          selectedItem={selectedItem}
          placeholder="Select Tank"
          onSelectItem={(item) => setSelectedItem(item)}
        />
        <View style={styles.dateSelector}>
          <AppText>Select Date Range</AppText>
          <Icon name="calendar-range" size={convertWidthToDP("10%")} />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: convertWidthToDP("3%"),
  },
  container: {
    flex: 1,
    marginTop: convertHeightToDP("10%"),
  },
  dateSelector: {
    width: "100%",
    paddingHorizontal: convertWidthToDP("5%"),
    paddingVertical: convertHeightToDP("1%"),
    backgroundColor: colors.white,
    elevation: convertWidthToDP("5%"),
    borderRadius: convertWidthToDP("2%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: convertHeightToDP("1%"),
  },
  daterangeContainer: {
    marginTop: convertHeightToDP("50%"),
  },
});
