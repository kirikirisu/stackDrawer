import React,{ Component } from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <SearchBar
          round
          placeholder="観光地を検索"
          containerStyle={{width:270,backgroundColor:"#FA58F4",borderTopWidth:0,borderBottomWidth:0,marginLeft:70}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    justifyContent:"center"
  },
});

