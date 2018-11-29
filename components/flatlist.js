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

  _keyExtractor = (item) => item.releaseYear;

  _fetch = () =>{
    fetch("https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=24e2ad5ad5ccf4cf84caa6ac6661c312&range=3&longitude=136.656408&latitude=36.561053")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState( {data:responseJson["rest"]} );
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>一覧</Text>
        </View>
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
                {item.name}{'\n\t'}{item.opentime}
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
  header: {
    marginTop: 30,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#c6e6fa',
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