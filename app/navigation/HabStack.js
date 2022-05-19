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
      <Stack.Screen name="HabScreen" component={HAB} />
      <Stack.Screen name="HabOneScreen" component={HabOne} />
      <Stack.Screen name="MaterialsScreen" component={Materials} />
      <Stack.Screen name="TrackingScreen" component={Tracking} />
    </Stack.Navigator>
  );
}
