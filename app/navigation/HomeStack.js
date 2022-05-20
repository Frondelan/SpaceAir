import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screen
import Home from "../screens/home/Home";
import HabHome from "../screens/home/HabHome";
import HabTypes from "../screens/home/HabTypes";
//Aditional Screens
import HAB from "../screens/hab/HAB";
import Environment from "../screens/environment/Environment";
import Regulation from "../screens/regulation/Regulation";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="HABScreen" component={HAB} />
      <Stack.Screen name="EnvironmentScreen" component={Environment} />
      <Stack.Screen name="RegulationScreen" component={Regulation} />
      <Stack.Screen name="HabHomeScreen" component={HabHome} />
      <Stack.Screen name="HabTypesScreen" component={HabTypes} />
    </Stack.Navigator>
  );
}
