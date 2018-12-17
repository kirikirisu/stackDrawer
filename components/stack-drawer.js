import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Stack from "./stack";
import Custom from "./custom";

const AppNavigator = createDrawerNavigator(
  {
    Home: { screen: Stack, },
  },
  {
    drawerWidth: 350,
    drawerBackgroundColor: "white",
    drawerType: "front",
    contentComponent: Custom,
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

