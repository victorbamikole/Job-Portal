import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { View, Text } from "react-native";

import styles from "./welcome.style";
import { SIZES } from "../../../constants";
import Popularjobs from "../popular/Popularjobs";
import Nearbyjobs from "../nearby/Nearbyjobs";
import Home from "../popular/Homemain";

const Welcome = ({ onLayout }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} onLayout={onLayout}>
      <View style={styles.view}>
        <Home />
        <Popularjobs />
        <Nearbyjobs />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  view: {
    flex: 1,
    padding: SIZES.medium,
  },
});

export default Welcome;
