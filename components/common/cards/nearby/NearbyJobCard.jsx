import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import checkImageURL from "../../../../utils";
import { useNavigation } from "@react-navigation/native";

const NearbyJobCard = ({ job }) => {
  const navigation = useNavigation();

  function jobHandler() {
    navigation.navigate("JobDetails", { jobId: job.job_id });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={jobHandler}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          style={styles.logoImage}
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>

        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
