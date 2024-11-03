import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
