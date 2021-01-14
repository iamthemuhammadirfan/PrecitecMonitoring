import {Dimensions, PixelRatio} from "react-native";
const {width, height} = Dimensions.get("window");

const convertWidthToDP = (number) => {
  let givenWidth = typeof number === "number" ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((givenWidth * width) / 100);
};

const convertHeightToDP = (number) => {
  let givenHeight = typeof number === "number" ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((givenHeight * height) / 100);
};

export {convertWidthToDP, convertHeightToDP};
