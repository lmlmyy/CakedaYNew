import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackHeader from "../components/BackHeader";
import RegionList from "../components/RegionList";
import ConfirmButton from "../components/ConfirmButton";

const RegionSelectionScreen: React.FC = () => {
  const [selectedRegions, setSelectedRegions] = React.useState<string[]>([
    "서울",
  ]);

  const toggleRegionSelection = (region: string) => {
    setSelectedRegions([region]);

    //클릭 시 취소되게
    //setSelectedRegions((prev) => (prev[0] === region ? [] : [region]));
  
  };
  

  const handleConfirm = () => {
    console.log("Selected regions:", selectedRegions);
  };

  return (
    <View style={styles.container}>
      <BackHeader title="관심 지역 설정" />
      <View style={styles.content}>
        <RegionList
          selectedRegions={selectedRegions}
          onToggleRegion={toggleRegionSelection}
        />
        <ConfirmButton onPress={handleConfirm} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 390,
    display: "flex",
    flexDirection: "column",
    paddingTop: 58,
    paddingRight: 18,
    paddingBottom: 43,
    paddingLeft: 18,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 29,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 30,
    fontWeight: "700",
    marginTop: 23,
    letterSpacing: -0.3,
  },
});

export default RegionSelectionScreen;
