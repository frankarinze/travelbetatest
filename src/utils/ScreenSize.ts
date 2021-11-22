import {
  Dimensions,
     PixelRatio, Platform
  } from 'react-native';
  import { getBottomSpace } from 'react-native-iphone-x-helper';
  import { scale } from 'react-native-size-matters';
  import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
  
  export const IS_ANDROID = Platform.OS === 'android';
  
  const SCREEN_WIDTH = widthPercentageToDP('100%');
  const SCREEN_HEIGHT = heightPercentageToDP('100%') ;
  
  const BOTTOM_SPACE = getBottomSpace();
  
  const HEADER_BAR_HEIGHT = scale(100);
  const HEADER_BAR_HEIGHT_DEFAULT = scale(100);
  
  const BOTTOM_BAR_HEIGHT = !IS_ANDROID && BOTTOM_SPACE ? scale(85) : scale(57);

const ANDROID_SOFT_BOTTOM_NAV_BAR_HEIGHT = IS_ANDROID
  ? Dimensions.get('screen').height - Dimensions.get('window').height
  : 0;
  
  const dpWidth = widthPercentageToDP('100%');
  const pixelScale = PixelRatio.get();
  
 
  const IS_SMALL = pixelScale <= 2 && dpWidth < 385;
  
  const OFFSET_TOP = scale(40);
  
  export default {
    BOTTOM_BAR_HEIGHT,
    ANDROID_SOFT_BOTTOM_NAV_BAR_HEIGHT,
    BOTTOM_SPACE,
    HEADER_BAR_HEIGHT,
    HEADER_BAR_HEIGHT_DEFAULT,
    IS_SMALL,
    OFFSET_TOP,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    widthPercentageToDP,
    heightPercentageToDP,
  };
  