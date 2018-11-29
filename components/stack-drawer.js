import React from "react";
import Stack from "./stack";
import SubScreen from "./subscreen";
import { StyleSheet, ScrollView, View, } from "react-native";
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from "react-navigation";
import SearchBar from "./searchbar";
import Icon from 'react-native-vector-icons/AntDesign';
import FlatList from "./flatlist";

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
    SUB: { screen: SubScreen }
  },
  {
    drawerWidth: 350,
    drawerBackgroundColor: "white",
    drawerType: "front",
    contentComponent: ({ props, navigation }) =>
      <ScrollView>
        <View style={styles.searchIcon}>
            <SearchBar 
              style={styles.searchbar}
            />
            <Icon
              name="left"
              size={35}
              style={styles.icon}
              onPress={() => navigation.closeDrawer()}
            />
        </View>
        <FlatList />
      </ScrollView>
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

const styles = StyleSheet.create({
  searchIcon: {
    flexDirection: "row",
    marginTop: 30,
  },
  searchbar:{
    zIndex:3,
  },
  icon: {
    marginRight: 285,
    paddingRight:18,
    paddingTop: 5,
    zIndex:-3
  }
});