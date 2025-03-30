import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';

const { width } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isMediumScreen = width >= 375 && width < 768;

const googleIconXml = `
<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M35.78 18.9091C35.78 17.6327 35.6655 16.4055 35.4527 15.2273H18.5V22.19H28.1873C27.77 24.44 26.5018 26.3464 24.5955 27.6227V32.1391H30.4127C33.8164 29.0055 35.78 24.3909 35.78 18.9091Z" fill="#4285F4"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M18.5 36.4999C23.36 36.4999 27.4346 34.8881 30.4127 32.139L24.5955 27.6226C22.9836 28.7026 20.9218 29.3408 18.5 29.3408C13.8118 29.3408 9.84364 26.1745 8.42819 21.9199H2.41455V26.5836C5.37637 32.4663 11.4636 36.4999 18.5 36.4999Z" fill="#34A853"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M8.42818 21.9199C8.06818 20.8399 7.86364 19.6863 7.86364 18.4999C7.86364 17.3135 8.06818 16.1599 8.42818 15.0799V10.4163H2.41455C1.19545 12.8463 0.5 15.5954 0.5 18.4999C0.5 21.4044 1.19545 24.1535 2.41455 26.5835L8.42818 21.9199Z" fill="#FBBC05"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M18.5 7.65909C21.1427 7.65909 23.5155 8.56727 25.3809 10.3509L30.5436 5.18818C27.4264 2.28364 23.3518 0.5 18.5 0.5C11.4636 0.5 5.37637 4.53364 2.41455 10.4164L8.42819 15.08C9.84364 10.8255 13.8118 7.65909 18.5 7.65909Z" fill="#EA4335"/>
</svg>
`;

const GoogleButton: React.FC = () => {
  const getIconSize = () => {
    if (isSmallScreen) return 28;
    if (isMediumScreen) return 32;
    return 36;
  };

  const iconSize = getIconSize();

  const handlePress = () => {
    console.log('Google login pressed');
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={styles.buttonContent}>
        <SvgXml xml={googleIconXml} width={iconSize} height={iconSize} />
        <Text style={styles.buttonText}>구글 로그인</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 21,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#747775',
    borderRadius: 4,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 217,
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 29,
    fontWeight: '400',
    fontFamily: 'Inder',
    color: '#1F1F1F',
    lineHeight: 34,
  },
});

export default GoogleButton;