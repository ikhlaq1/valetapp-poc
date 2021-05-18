import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import * as eva from "@eva-design/eva";
import SignUp from "./screens/SignUp";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { AssetIconsPack } from "./custom-icons";
import { default as theme } from "./theme.json";

import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import SignIn from "./screens/SignIn";
import ChangePassword from "./screens/ChangePassword";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconRegistry icons={AssetIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <SignUp navigation={navigation} />
      </ApplicationProvider>
    </View>
  );
}
const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Change Password" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
