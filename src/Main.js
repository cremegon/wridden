import { View, Text } from "react-native";
import React from "react";
import WriteNew from "./Screens/StoryHome/WriteNew";
import StoryList from "./Screens/StoryHome/StoryList";
import ReadStory from "./Screens/StoryHome/ReadStory";
import StoryHomeAccess from "./Screens/StoryHome";
import CharacterTabRouter from "./Screens/CharacterHomeTab/Router";
import CharacterList from "./Screens/CharacterHomeTab/List";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawingCharacter2 from "./Components/DrawCharacter2";

const Bottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CommunityHomeTab = () => {
  return (
    <View>
      <Text>Community Home</Text>
    </View>
  );
};

const StoryHomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Story Home Access"
        component={StoryHomeAccess}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Write New"
        component={WriteNew}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Story List"
        component={StoryList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Read Story"
        component={ReadStory}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CharacterHomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Character Home Access"
        component={CharacterTabRouter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Character List"
        component={CharacterList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Character Draw"
        component={DrawingCharacter2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <Bottom.Navigator>
        <Bottom.Screen
          name="Story Home"
          component={StoryHomeTab}
          options={{ headerShown: false }}
        />
        <Bottom.Screen
          name="Character Home"
          component={CharacterHomeTab}
          options={{ headerShown: false }}
        />
        <Bottom.Screen
          name="Community Home"
          component={CommunityHomeTab}
          options={{ headerShown: false }}
        />
      </Bottom.Navigator>
    </View>
  );
};

export default Main;
