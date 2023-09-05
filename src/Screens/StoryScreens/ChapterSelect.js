import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../Components/AppHeader";
import Buttons from "../../Components/Buttons";

const ChapterSelect = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(226,237,236,0.4)" }}>
      <AppHeader
        title={route.params.paramKey}
        icon={"chevron-back"}
        navigation={navigation}
      />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Buttons
          title={"Chapter 1"}
          navigation={navigation}
          link={"Story 1"}
          params={route.params.paramKey}
        />
        <Buttons
          title={"Chapter 2"}
          navigation={navigation}
          link={"Story 1"}
          params={route.params.paramKey}
        />
        <Buttons
          title={"Chapter 3"}
          navigation={navigation}
          link={"Story 1"}
          params={route.params.paramKey}
        />
        <Buttons
          title={"Chapter 4"}
          navigation={navigation}
          link={"Story 1"}
          params={route.params.paramKey}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChapterSelect;
