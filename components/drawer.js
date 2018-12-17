import React from "react";
import { createDrawerNavigator } from "react-navigation";
import Stack from "./stack";
import Custom from "./custom";

const Drawer = createDrawerNavigator({
  Home: { screen: Stack, },
}, {
  drawerWidth: 350,
  drawerBackgroundColor: "white",
  drawerType: "front",
  contentComponent: Custom,
});

export default Drawer;
