import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import Main from "./main";

const StackNavigator = createStackNavigator({
  MainScreen:{
    screen:Main,
    navigationOptions:({navigation}) => ({
      title:"MainScreen",
      headerLeft:(
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require("./chat.png")}
            style={{width:30,height:30}}
          />
        </TouchableOpacity>
      )
    })
  },
});

export default StackNavigator;
