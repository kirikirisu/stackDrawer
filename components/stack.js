import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import Main from "./main";
import SearchIcon from "react-native-vector-icons/AntDesign";
import CalendarIcon from "react-native-vector-icons/EvilIcons";

const StackNavigator = createStackNavigator({
  MainScreen: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      title: "MainScreen",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <SearchIcon
            name="search1"
            size={25}
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity>
          <CalendarIcon
            name="calendar"
            size={35}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
      headerStyle: ({
        marginTop:10
      }),
    })
  },
});

export default StackNavigator;

/*<Image
  source={require("./chat.png")}
  style={{ width: 30, height: 30 }}
/>
*/