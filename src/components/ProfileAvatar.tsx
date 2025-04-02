import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import AvatarIcon from "../../assets/icons/profileAvatar.svg";
import CameraIcon from "../../assets/icons/camera-icon.svg";

interface ProfileAvatarProps {
  onSelectImage?: () => void;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ onSelectImage }) => {
  const avatarCircleSvg = `
    <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 60C0.5 26.8629 27.3629 0 60.5 0C93.6371 0 120.5 26.8629 120.5 60C120.5 93.1371 93.6371 120 60.5 120C27.3629 120 0.5 93.1371 0.5 60Z" fill="#C8BBBB"/>
    </svg>
  `;

  const cameraSvg = `
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 15.5C13.8807 15.5 15 14.3807 15 13C15 11.6193 13.8807 10.5 12.5 10.5C11.1193 10.5 10 11.6193 10 13C10 14.3807 11.1193 15.5 12.5 15.5Z" fill="#60635E"/>
      <path fillRule="evenodd" cilpRule="evenodd" d="M16.9806 6.1958C16.9924 6.44923 17.1869 6.65945 17.4387 6.69094C21.0821 7.14671 21.5 8.63107 21.5 13.25C21.5 19.4377 20.75 20 12.5 20C4.25 20 3.5 19.4377 3.5 13.25C3.5 8.63107 3.91791 7.14671 7.56133 6.69094C7.81307 6.65945 8.00765 6.44923 8.01944 6.1958C8.1335 3.74547 8.84336 3.5 12.5 3.5C16.1566 3.5 16.8665 3.74547 16.9806 6.1958ZM12.5 17C14.7092 17 16.5 15.2092 16.5 13C16.5 10.7908 14.7092 9 12.5 9C10.2908 9 8.5 10.7908 8.5 13C8.5 15.2092 10.2908 17 12.5 17ZM19 10C19 10.5523 18.5523 11 18 11C17.4477 11 17 10.5523 17 10C17 9.44771 17.4477 9 18 9C18.5523 9 19 9.44771 19 10Z" fill="#60635E"/>
    </svg>
  `;

  const profileIconSvg = `
    <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" cilpRule="evenodd" d="M44.8097 29.52C44.8097 34.4075 44.0591 36.0279 43.5079 36.6523C43.0592 37.1634 41.6271 38.2321 36.5 38.2321C31.373 38.2321 29.9409 37.1634 29.4922 36.6523C28.941 36.0279 28.1904 34.4075 28.1904 29.52C28.1904 24.7081 31.9103 20.808 36.5 20.808C41.0898 20.808 44.8097 24.7081 44.8097 29.52ZM47.1226 41.0693C49.5573 38.7345 50.3495 34.9593 50.3495 29.52C50.3495 21.5021 44.1477 15 36.5 15C28.8524 15 22.6506 21.5021 22.6506 29.52C22.6506 34.9593 23.4428 38.7345 25.8775 41.0693C21.2684 43.7148 17.6537 48.0273 15.7702 53.2342C15.4267 54.1867 15.3464 55.2902 15.9142 56.1179C17.4875 58.4091 20.551 55.7955 21.8141 53.301C24.6034 47.7921 30.1348 44.0401 36.5 44.0401C42.8653 44.0401 48.3967 47.7921 51.186 53.301C52.4491 55.7955 55.5126 58.4091 57.0859 56.1179C57.6537 55.2902 57.5734 54.1867 57.2299 53.2342C55.3464 48.0273 51.7317 43.7148 47.1226 41.0693Z" fill="white" stroke="#C8BBBB"/>
    </svg>
  `;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <SvgXml xml={avatarCircleSvg} width={120} height={120} />

        <TouchableOpacity style={styles.cameraButton} onPress={onSelectImage}>
          <CameraIcon width={24} height={24} />
        </TouchableOpacity>

        <View style={styles.profileIconContainer}>
          <SvgXml xml={profileIconSvg} width={72} height={72} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 24,
  },
  avatarContainer: {
    position: "relative",
    width: 120,
    height: 120,
  },
  cameraButton: {
    position: "absolute",
    right: -12,
    bottom: -8,
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    borderWidth: 8,
    borderColor: "#FFF",
    backgroundColor: "#F4F7F2",
  },
  profileIconContainer: {
    position: "absolute",
    right: 24,
    top: 23,
  },
});

export default ProfileAvatar;
