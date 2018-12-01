import React from "react";
import Stack from "./stack";
import { StyleSheet, ScrollView, View, KeyboardAvoidingView } from "react-native";
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from "react-navigation";
import Icon from 'react-native-vector-icons/AntDesign';
import FlatList from "./flatlist";
import { SearchBar } from "react-native-elements";

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

class Custom extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <View>
        <View style={styles.searchAndIcon}>
          <Icon
            name="left"
            size={35}
            onPress={() => this.props.navigation.closeDrawer()}
            style={styles.icon}
          />
          <SearchBar
            round
            placeholder="観光地を検索"
            containerStyle={{ width: 270, backgroundColor: "white", borderTopWidth: 0, borderBottomWidth: 0, marginLeft: 20 }}
            inputStyle={{ backgroundColor: "#F8FBEF" }}
            returnKeyType="done"
          />
        </View>
        <ScrollView>
          <FlatList />
        </ScrollView>
      </View>
    );
  }
}

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

const styles = StyleSheet.create({
  searchAndIcon: {
    flexDirection: "row",
    marginTop: 30,
  },
  icon: {
    marginTop: 6,
    marginLeft: 10,
  },
});