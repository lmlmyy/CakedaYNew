import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';

const { width } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isMediumScreen = width >= 375 && width < 768;

const kakaoIconXml = `
<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_198_1135)">
    <path opacity="0.902" fill-rule="evenodd" clip-rule="evenodd" d="M18 2.38794C8.58 2.38794 0 9.95994 0 16.3659C0 21.1659 3.116 25.3999 7.862 27.9159L5.866 35.2479C5.688 35.8979 6.426 36.4139 6.992 36.0399L15.746 30.2299C16.484 30.3019 17.236 30.3439 18 30.3439C27.94 30.3439 36 24.0859 36 16.3659C36 9.95994 27.94 2.38794 18 2.38794Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_198_1135">
      <rect width="36" height="36" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>
`;

const KakaoButton: React.FC = () => {
  // Calculate icon size based on screen size
  const getIconSize = () => {
    if (isSmallScreen) return 28;
    if (isMediumScreen) return 32;
    return 36;
  };

  const iconSize = getIconSize();

  const handlePress = () => {
    // Handle Kakao login logic here
    console.log('Kakao login pressed');
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={styles.buttonContent}>
        <SvgXml xml={kakaoIconXml} width={iconSize} height={iconSize} />
        <Text style={styles.buttonText}>카카오 로그인</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#FEE500',
    borderRadius: 12,
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
    color: '#000',
  },
});

export default KakaoButton;