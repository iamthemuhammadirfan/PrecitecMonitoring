import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import {convertWidthToDP} from "../config/utils";
export default function AppTextInput({icon, style, ...otherProps}) {
  const [focus, setFocus] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {borderBottomColor: focus ? colors.primary : colors.light},
      ]}>
      {icon && (
        <Icon
          name={icon}
          size={convertWidthToDP("7%")}
          style={{
            color: focus ? colors.primary : colors.light,
            marginRight: convertWidthToDP("1%"),
          }}
        />
      )}
      <TextInput
        style={[
          {
            color: colors.black,
            width: "100%",
          },
          style,
        ]}
        {...otherProps}
        placeholderTextColor={focus ? colors.primary : colors.light}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.white,
    marginVertical: convertWidthToDP("3%"),
    borderBottomWidth: 1,
  },
});
