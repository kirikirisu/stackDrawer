import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Alert } from "react-native";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {data:null};
  }
  
  componentWillMount(){
    this._fetch();
  }

  _keyExtractor = (item) => item.id;

  _fetch = () =>{
    fetch("https://infra-api.city.kanazawa.ishikawa.jp/facilities/search.json?lang=ja&page=1&count=50&area=1&genre=1")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState( {data:responseJson["facilities"]} );
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.body}>
          <FlatList
            data={this.state.data}
            extraData={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) =>
            <View style={styles.movieView}>
              <Text
                style={styles.movieText}
                onPress={() => Alert.alert(item.name)}
              >
                {item.id}{'\n\t'}{item.name}
              </Text>
            </View>
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  body: {
    flex: 1,
  },
  footer: {
    padding: 10,
    borderStyle: 'solid',
    borderTopWidth: 1,
    alignItems: 'center',
    backgroundColor: '#c6e6fa',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieView: {
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  movieText: {
    fontSize: 16,
    lineHeight: 25,
  },
});