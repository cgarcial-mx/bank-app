import { Dimensions, PixelRatio, useWindowDimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const scaleFont = (size: number) =>
  Number(useWindowDimensions().width) > 768
    ? size * PixelRatio.getFontScale() * 0.5
    : size * PixelRatio.getFontScale();

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
