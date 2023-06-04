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
import { useNavigation } from "@react-navigation/native";
import styles from "../welcome/welcome.style";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Home = ({ searchTerm, setSearchTerm, handleClick }) => {
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const navigation = useNavigation();
  // const [searchTerm, setSearchTerm] = useState("");

  function jobHandler() {
    if (searchTerm) {
      navigation.navigate("JobSearch", { searchText: searchTerm });
    }
  }

  function renderJobs({ item }) {
    return (
      <TouchableOpacity
        style={styles.tab(activeJobType, item)}
        onPress={() => {
          setActiveJobType(item);
          navigation.navigate("JobSearch", { item: item });
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
            value={searchTerm}
            style={styles.searchInput}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
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
