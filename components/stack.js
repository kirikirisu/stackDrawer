import React from "react";
import { createStackNavigator } from "react-navigation";
import Main from "./main";

const Stack = createStackNavigator({
  MainScreen: {
    screen: Main,
  },
}, {
  defaultNavigationOptions: {
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
