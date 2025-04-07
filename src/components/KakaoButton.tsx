import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import KakaoIcon from "../../assets/icons/kakao-icon.svg";

const KakaoButton: React.FC = () => {
  const handlePress = () => {
    console.log("Kakao login pressed");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <View style={styles.buttonContent}>
        <KakaoIcon width={36} height={36} /> 
        <Text style={styles.buttonText}>카카오 로그인</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#FEE500",
    borderRadius: 12,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    width: 217,
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 29,
    fontWeight: "400",
    fontFamily: "Inder",
    color: "#000",
  },
});

export default KakaoButton;
