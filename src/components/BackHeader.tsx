import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BackIcon from "../../assets/icons/back-icon.svg"; // ← SVG 파일 경로 (assets 폴더 위치에 따라 조정)

interface BackHeaderProps {
  title: string;
  onBack?: () => void;
}

const BackHeader: React.FC<BackHeaderProps> = ({ title, onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <BackIcon width={39} height={39} /> {/* ← SvgXml 대신 이렇게! */}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 26,
  },
  backButton: {
    width: 39,
    height: 39,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: -0.3,
    marginTop: 10,
  },
});

export default BackHeader;
