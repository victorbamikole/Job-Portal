import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, SIZES, icons, images } from "../../../constants";
import styles from "../welcome/welcome.style";
import { useNavigation } from "@react-navigation/native";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Home = () => {
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const navigation = useNavigation();

  function renderJobs({ item }) {
    return (
      <TouchableOpacity
        style={styles.tab(activeJobType, item)}
        onPress={() => {
          setActiveJobType(item);
          navigation.navigate("PopularJobs", { item });
        }}
      >
        <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Victor</Text>
        <Text style={styles.welcomeMessage}>Find Your perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={renderJobs}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({});

export default Home;
