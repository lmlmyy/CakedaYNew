import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import ArrowRightIcon from "../../assets/icons/arrowRight.svg"; // SVG import는 타입 선언 필요

interface InputFieldProps extends Pick<TextInputProps, 'value' | 'onChangeText' | 'placeholder'> {
  showArrow?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  showArrow = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#91958E"
      />
      {showArrow && (
        <View style={styles.arrowContainer}>
          <ArrowRightIcon width={24} height={24} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8EBE6",
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#000",
    paddingVertical: 0,
    includeFontPadding: false,
    //fontFamily: "Poppins", // 실제 사용 시 font 등록 필수
  },
  arrowContainer: {
    marginLeft: 16,
  },
});

export default InputField;
