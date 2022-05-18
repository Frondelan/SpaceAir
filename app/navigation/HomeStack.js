import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screen
import Home from "../screens/home/Home";
//Aditional Screens
import Tracking from "../screens/hab/Tracking";
import HabOne from "../screens/hab/HabOne";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tracking" component={Tracking} />
      <Stack.Screen name="HabOne" component={HabOne} />
    </Stack.Navigator>
  );
}
