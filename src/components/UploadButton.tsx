import * as React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import UploadIcon from '../../assets/icons/upload-icon.svg';

interface UploadButtonProps {
  onPress: () => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <UploadIcon style={{ width: 18, height: 18 }} />
      <Text style={styles.text}>사진 업로드</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    height: 34,
    paddingVertical: 17,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#E78182",
  },
  text: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default UploadButton;
