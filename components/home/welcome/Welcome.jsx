import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { View, Text } from "react-native";

import styles from "./welcome.style";
import { SIZES } from "../../../constants";
import Popularjobs from "../popular/Popularjobs";
import Nearbyjobs from "../nearby/Nearbyjobs";
import Home from "../popular/Homemain";
import { useNavigation } from "@react-navigation/native";

const Welcome = ({ onLayout }) => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");

  function jobHandler() {
    if (searchTerm) {
      navigation.navigate("JobSearch", { searchText: searchTerm });
    }
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} onLayout={onLayout}>
      <View style={styles.view}>
        <Home
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClick={jobHandler}
        />
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
