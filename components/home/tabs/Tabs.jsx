import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  function renderItem({ item }) {
    return (
      <TabButton
        name={item}
        activeTab={activeTab}
        onHandleSearchType={() => setActiveTab(item)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.small/2}}
      />
    </View>
  );
};

export default Tabs;
