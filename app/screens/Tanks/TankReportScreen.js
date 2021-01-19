import React, {useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

import AppPicker from "../../components/AppPicker";
import AppScreen from "../../components/AppScreen";
import AppTopBar from "../../components/layout/AppTopBar";
import {convertWidthToDP, convertHeightToDP} from "../../config/utils";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
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
export default function TankReportScreen({navigation}) {
  const [selectedItem, setSelectedItem] = useState();
  const [date, setDate] = useState(moment(new Date()));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChange = (event, sellectedDate) => {
    setShowDatePicker(false);
    if (sellectedDate !== undefined) setDate(moment(sellectedDate));
    else setDate(moment(new Date()));
    console.log(date);
  };
  return (
    <AppScreen style={styles.screen}>
      <AppTopBar onPress={() => navigation.openDrawer()} />
      <View style={styles.container}>
        <AppPicker
          items={tanks}
          selectedItem={selectedItem}
          placeholder="Select Tank"
          onSelectItem={(item) => setSelectedItem(item)}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setShowDatePicker(true)}>
          <View style={styles.dateSelector}>
            <AppText>
              {date ? date.format("MMMM DD, YYYY").toString() : "Choose Date"}
            </AppText>
            <Icon name="calendar-range" size={convertWidthToDP("10%")} />
          </View>
        </TouchableOpacity>
        {showDatePicker === true && (
          <DateTimePicker
            value={new Date(date)}
            mode="date"
            display="calendar"
            onChange={onChange}
          />
        )}
        <AppButton title="Generate Report" style={styles.button} />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
  },
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
});
