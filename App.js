import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./components/home/welcome/Welcome";
import { StatusBar } from "expo-status-bar";
import { COLORS, icons, images } from "./constants";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ScreenHeaderBtn from "./components/common/header/ScreenHeaderBtn";
import Popularjobs from "./components/home/popular/Popularjobs";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Welcome}
              options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                  <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                  <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
              }}
            />
            <Stack.Screen
              name="PopularJobs"
              component={Popularjobs}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
