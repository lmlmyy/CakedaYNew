import * as React from "react";
import { View, StyleSheet } from "react-native";
import TitleSection from "../components/TitleSection";
import SearchBar from "../components/SearchBar";
import ImageGrid from "../components/ImageGrid";

function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.spacingLarge} />
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <TitleSection />
          <SearchBar />
        </View>
        <ImageGrid />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 17,
    overflow: "hidden",
  },
  spacingLarge: {
    display: "flex",
    minHeight: 24,
    marginTop: 11,
    width: "100%",
    backgroundColor: "#FFF",
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  headerContainer: {
    width: "100%",
    fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
    lineHeight: 1,
  },
});

export default MainScreen;
