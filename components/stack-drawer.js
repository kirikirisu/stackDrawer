import React from "react";
import Stack from "./stack";
import SubScreen from "./subscreen";
import { StyleSheet, ScrollView, View,  } from "react-native";
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from "react-navigation";
import SearchBar from "./searchbar";
import Icon from 'react-native-vector-icons/AntDesign';
import FlatList from "./flatlist";
//import BackIcon from "./back-icon";

/*const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <SearchBar />
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
*/

const AppNavigator = createDrawerNavigator(
  {
    Home: { screen: Stack, },
    SUB:{screen:SubScreen}
  },
  {
    drawerWidth: 340,
    drawerBackgroundColor: "#FA58F4",
    drawerType: "front",
    contentComponent: props =>
      <ScrollView>
      <View style={styles.searchIcon}>
        <SearchBar />
        <Icon 
          name="left"
          size={37}
          style={styles.icon}
        />
      </View>
        <FlatList />
        <DrawerItems {...props} />
      </ScrollView>
  }
);

const styles = StyleSheet.create({
  searchIcon: {
    flexDirection:"row",
    marginTop:20,
  },
  icon:{
    marginRight:300,
    paddingLeft:20,
    paddingTop:5,
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;