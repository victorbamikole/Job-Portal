import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES, icons, images } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const navigation = useNavigation();

  const { data, isLoading, error } = useFetch("search", {
    query: "react developer",
    num_pages: 1,
  });

  function renderItem({ item }) {
    return (<PopularJobCard item={item} />)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Somethin Went Wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.jobs_id}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({});

export default Popularjobs;
