import React, {useRef} from "react";
import {StyleSheet, Dimensions, Image, Animated} from "react-native";
import AppCard from "../components/AppCard";
import AppScreen from "../components/AppScreen";
import {convertWidthToDP, convertHeightToDP} from "../config/utils";
const {width, height} = Dimensions.get("window");
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
        snapToInterval={convertWidthToDP("94%")}
        scrollEventThrottle={convertWidthToDP("100%")}
        bounces={false}
        decelerationRate={0.88}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        data={listCategorires}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * convertWidthToDP("84%"),
            index * convertWidthToDP("84%"),
            (index + 1) * convertWidthToDP("84%"),
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [50, 0, 50],
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
