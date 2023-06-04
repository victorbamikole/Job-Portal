import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import checkImageURL from "../../../../utils";
import { useNavigation } from "@react-navigation/native";

const PopularJobCard = ({ item, selectedJob }) => {
  const navigation = useNavigation();

  function jobHandler() {
    navigation.navigate("JobDetails", { jobId: item.job_id });
  }
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={jobHandler}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          resizeMode="contain"
          style={styles.logoImage}
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          onPress={jobHandler}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}> {item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
