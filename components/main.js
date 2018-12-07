import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";

/*let region = {
 latitude:36.558945 ,
 longitude: 136.652489
}
*/
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapview}
          ref={ref => { this.mapView = ref }}
          initialRegion={{
            latitude: 35.681262,
            longitude: 139.766403,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00521,
          }}
        >

          <MapView.Marker
            coordinate={{
              latitude: 35.681262,
              longitude: 139.766403,
            }}
            title="東京駅"
          />
        </MapView>


        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.mapView.animateToRegion({
              latitude: 36.558945,
              longitude: 136.652489
            }, 1000)}
            style={styles.button}
          >
            <Text style={styles.buttonItem}>移動</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mapview: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  button: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonItem: {
    textAlign: "center"
  },
});