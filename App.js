import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/Screens/Splash";
import LoginScreen from "./src/Screens/Login";
import Main from "./src/Main";
import SettingsPage from "./src/Screens/Settings";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignUp from "./src/Screens/SignUp";
import ResetPass from "./src/Screens/ResetPass";
import Test from "./src/Components/Card";
import Card from "./src/Components/Card";

const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Main"
          component={Main}
          options={{ headerShown: true }}
        />

        <Drawer.Screen
          name="Settings"
          component={SettingsPage}
          options={{ headerShown: true }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Sign Up"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Card"
          component={Card}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Reset Pass"
          component={ResetPass}
          options={{ headerShown: true }}
        />
        <RootStack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
