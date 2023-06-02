import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS, SIZES, icons, images } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {
  const navigation = useNavigation();

  const { data, isLoading, error } = useFetch("search", {
    query: "react developer",
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleCardPress={navigation.navigate("PopularJobs")}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
