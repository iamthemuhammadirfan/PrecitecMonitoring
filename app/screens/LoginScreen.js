import React from "react";
import {Image, StyleSheet, View} from "react-native";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import {convertWidthToDP, convertHeightToDP} from "../config/utils";
export default function LoginScreen({navigation}) {
  return (
    <AppScreen
      style={{
        paddingHorizontal: convertWidthToDP("3%"),
        justifyContent: "center",
      }}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/images/logo.png")}
      />
      <View style={styles.container}>
        <AppText style={styles.headline}>Let's Sign You In</AppText>
        <AppText style={styles.tagline}>
          Welcome back, you've been missed!
        </AppText>
        <AppTextInput
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
        />
        <AppTextInput icon="lock" placeholder="Password" secureTextEntry />
        <AppButton
          title="Let's Go!"
          style={{marginTop: convertHeightToDP("8%")}}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: convertWidthToDP("2%"),
    elevation: convertWidthToDP("4%"),
    paddingVertical: convertHeightToDP("8%"),
    paddingHorizontal: convertWidthToDP("7%"),
    width: "100%",
  },
  headline: {
    textAlign: "justify",
    fontSize: convertWidthToDP("8%"),
    fontWeight: "bold",
  },
  input: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },
  logo: {
    width: convertWidthToDP("100%"),
    position: "absolute",
    top: convertHeightToDP("4%"),
    alignSelf: "center",
  },
  tagline: {
    color: colors.medium,
    marginBottom: convertHeightToDP("5%"),
  },
});
