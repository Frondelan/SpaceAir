import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
//Stacks de cada menu
import HomeStack from "./HomeStack";
import HabStack from "./HabStack";
import EnvironmentStack from "./EnvironmentStack";
import RegulationStack from "./RegulationStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "#2155CD",
          tabBarInactiveTintColor: "#A0BCC2",
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="HabStack" component={HabStack} />
        <Tab.Screen name="EnvironmentStack" component={EnvironmentStack} />
        <Tab.Screen name="RegulationStack" component={RegulationStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "HomeStack":
      iconName = "globe-americas";
      break;
    case "HabStack":
      iconName = "lightbulb";
      break;
    case "EnvironmentStack":
      iconName = "leaf";
      break;
    case "RegulationStack":
      iconName = "balance-scale";
      break;

    default:
      break;
  }

  return <FontAwesome5 name={iconName} size={27} color={color} />;
}
