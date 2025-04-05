// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ProfileSetupScreen from '../screens/ProfileSetupScreen';
import RegionSelectionScreen from '../screens/RegionSelectionScreen';

// 🔸 네비게이션에 사용할 param 타입 정의
export type RootStackParamList = {
  Login: undefined;
  RegionSelection: {
    previousData?: {
      nickname: string;
      userType: 'owner' | 'customer' | null;
      selectedCakes: number[];
    };
  };
  ProfileSetup: {
    location?: string;
    nickname?: string;
    userType?: 'owner' | 'customer' | null;
    selectedCakes?: number[];
  };
};

// 🔸 Stack 생성
const Stack = createNativeStackNavigator<RootStackParamList>();


const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
      <Stack.Screen name="RegionSelection" component={RegionSelectionScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
