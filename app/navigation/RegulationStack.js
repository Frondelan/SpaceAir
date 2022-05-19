import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import Regulation from "../screens/regulation/Regulation";
import USA from "../screens/regulation/USA";

const Stack = createNativeStackNavigator();

export default function RegulationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="RegulationScreen" component={Regulation} />
      <Stack.Screen name="UsaScreen" component={USA} />
    </Stack.Navigator>
  );
}
