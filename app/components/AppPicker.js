import React, {useState} from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import {convertHeightToDP, convertWidthToDP} from "../config/utils";
import AppPickerItem from "./AppPickerItem";
import AppScreen from "./AppScreen";
import AppText from "./AppText";
export default function AppPicker({
  items,
  onSelectItem,
  selectedItem,
  placeholder,
}) {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setModalVisibility(true)}>
        <View style={styles.container}>
          <AppText>{selectedItem ? selectedItem.label : placeholder}</AppText>
          <Icon name="chevron-down" size={convertWidthToDP("10%")} />
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisibility} animationType="slide">
        <AppScreen>
          <Button title="Close" onPress={() => setModalVisibility(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({item}) => (
              <AppPickerItem
                label={item.label}
                onPress={() => {
                  setModalVisibility(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: convertWidthToDP("5%"),
    paddingVertical: convertHeightToDP("1%"),
    backgroundColor: colors.white,
    elevation: convertWidthToDP("5%"),
    borderRadius: convertWidthToDP("2%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
