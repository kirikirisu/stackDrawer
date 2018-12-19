import React from "react";
import { createStackNavigator } from "react-navigation";
import HeaderLeft from './headerLeft';
import HeaderRight from './headerRight';
import Main from "./main";
import MapDist from './mapDist';

const Stack = createStackNavigator({
  MainScreen: { screen: Main },
  Dist: { screen: MapDist, },
}, {
  defaultNavigationOptions: {
    title: "MainScreen",
    headerLeft: <HeaderLeft />,
    headerRight: <HeaderRight />,
    headerStyle: ({
      marginTop: 10
    }),
  },
});

export default Stack;

/*<Image
 source={require("./chat.png")}
 style={{ width: 30, height: 30 }}
 />
 */
