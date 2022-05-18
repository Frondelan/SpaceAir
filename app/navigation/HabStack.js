import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import HAB from "../screens/hab/HAB";
import HabOne from "../screens/hab/HabOne";
import Materials from "../screens/hab/Materials";
import Tracking from "../screens/hab/Tracking";

const Stack = createNativeStackNavigator();

export default function HabStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Hab" component={HAB} />
      <Stack.Screen name="HabOne" component={HabOne} />
      <Stack.Screen name="Materials" component={Materials} />
      <Stack.Screen name="Tracking" component={Tracking} />
    </Stack.Navigator>
  );
}
