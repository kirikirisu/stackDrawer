import React from "react";
import Stack from "./stack";
import { StyleSheet, ScrollView, View, FlatList, Text,Alert} from "react-native";
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from "react-navigation";
import Icon from 'react-native-vector-icons/AntDesign';
import { SearchBar } from "react-native-elements";


class Custom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kankoudata: null,
      filterText: "",
    }
  }

  componentWillMount() {
    this._fetch();
  }

  _keyExtractor = (item) => item.id;

  _fetch = () => {
    fetch("https://infra-api.city.kanazawa.ishikawa.jp/facilities/search.json?lang=ja&page=1&count=50&area=1&genre=1")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ kankoudata: responseJson["facilities"] });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const filterText = this.state.filterText
    let kankoudata = this.state.kankoudata
    if (filterText !== "") {
      kankoudata = kankoudata.filter(t => t.name.includes(filterText))
    }
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
            onChangeText={(text) => this.setState({ filterText: text })}
          />
        </View>
        <ScrollView>
          <FlatList
            data={kankoudata}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) =>
              <View style={styles.kankouview}>
                <Text
                  style={styles.kankoutext}
                  onPress={() => Alert.alert("観光地のピンに遷移する予定")}
                >
                  {item.name}
                </Text>
              </View>
            }
          />
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
  kankouview: {
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  kankoutext: {
    fontSize: 16,
    lineHeight: 25,
  }
});