import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screen
import Environment from "../screens/environment/Environment";

const Stack = createNativeStackNavigator();

export default function EnvironmentStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Environment" component={Environment} />
    </Stack.Navigator>
  );
}
