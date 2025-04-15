import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import BackHeader from "../components/BackHeader";
import ProfileAvatar from "../components/ProfileAvatar";
import InputField from "../components/InputField";
import UserTypeSection from "../components/UserTypeSection";
import CakePreferencesSection from "../components/CakePreferencesSection";
import PrimaryButton from "../components/PrimaryButton";

const ProfileSetupScreen: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [location, setLocation] = useState("");
  const [userType, setUserType] = useState<"owner" | "customer" | null>(null);
  const [selectedCakes, setSelectedCakes] = useState<number[]>([]);

  const handleCakeSelection = (index: number) => {
    if (selectedCakes.includes(index)) {
      setSelectedCakes(selectedCakes.filter((item) => item !== index));
    } else {
      if (selectedCakes.length < 3) {
        setSelectedCakes([...selectedCakes, index]);
      }
    }
  };

  const handleLogin = () => {
    console.log({
      nickname,
      location,
      userType,
      selectedCakes,
    });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <BackHeader title="프로필 설정" />
      <View style={{alignItems: "center", marginBottom: 20}}>
        <ProfileAvatar />
      </View>
        

        <View style={styles.inputContainer}>
          <InputField
            placeholder="닉네임"
            value={nickname}
            onChangeText={setNickname}
          />
          <InputField
            placeholder="관심 지역"
            value={location}
            onChangeText={setLocation}
            showArrow
          />
        </View>

        <UserTypeSection
          selectedType={userType}
          onSelectType={(type) => setUserType(type)}
        />

        <CakePreferencesSection
          selectedCakes={selectedCakes}
          onSelectCake={handleCakeSelection}
        />

        <PrimaryButton
          title="로그인"
          onPress={handleLogin}
          style={{
            backgroundColor: "#E78182",
            height: 44,
            marginTop: 30,
            borderRadius: 8,
          }}
        />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    maxWidth: 390,
    paddingTop: 46,
    paddingRight: 18,
    paddingBottom: 46,
    paddingLeft: 18,
    flexDirection: "column",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 20,
  },
});

export default ProfileSetupScreen;
