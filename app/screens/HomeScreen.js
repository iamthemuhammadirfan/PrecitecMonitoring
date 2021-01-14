import React, {useRef} from "react";
import {StyleSheet, Text, View, Image, Animated} from "react-native";
import AppCard from "../components/AppCard";
import AppScreen from "../components/AppScreen";
import {convertWidthToDP, convertHeightToDP} from "../config/utils";
const listCategorires = [
  {
    id: 1,
    title: "Tanks Monitoring",
    image: require("../assets/images/tank.png"),
  },
  {
    id: 2,
    title: "Vehicles Monitoring",
    image: require("../assets/images/vehicle.png"),
  },
  {
    id: 3,
    title: "Generators Monitoring",
    image: require("../assets/images/generator.png"),
  },
];
export default function HomeScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <AppScreen style={styles.screen}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/images/logo.png")}
      />
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
        }}
        bounces={false}
        decelerationRate={0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: "center"}}
        snapToInterval={convertWidthToDP("95%")}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        data={listCategorires}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 2) * convertWidthToDP("50%"),
            (index - 1) * convertWidthToDP("50%"),
            index * convertWidthToDP("75%"),
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -100, 0],
            extrapolate: "clamp",
          });
          return (
            <AppCard
              title={item.title}
              image={item.image}
              style={{transform: [{translateY}]}}
            />
          );
        }}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: convertWidthToDP("100%"),
    position: "absolute",
    top: convertHeightToDP("4%"),
    alignSelf: "center",
  },
  screen: {
    paddingHorizontal: convertWidthToDP("3%"),
    justifyContent: "center",
  },
});
