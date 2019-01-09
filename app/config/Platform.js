/**
 * @author: dwi.setiyadi@gmail.com
*/

import { Dimensions, Platform } from 'react-native';
import deviceInfo from 'react-native-device-info';
import { Availability } from '../lang/Translation';

export const NavigationOptions = {
  headerStyle: {
    backgroundColor: '#603fb0',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const { width, height } = Dimensions.get('window');
export const dimensions = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export const lang = () => {
  const str = deviceInfo.getDeviceLocale().toLowerCase();
  const deviceLang = Platform.OS === 'ios' ? str.substr(0, 2) : str.substr(str.length - 2, str.length);
  const checkLang = Availability.findIndex(find => find === deviceLang);
  return checkLang < 0 ? 'en' : deviceLang;
};
