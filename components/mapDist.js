import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

class MapDist extends Component {
  static navigationOptions = ({ navigation }) => {
    const dist = navigation.getParam('dist', '');
    return {
      title: dist ? dist.name : '目的地',
    };
  };

  render() {
    const { name, coordinates } = this.props.navigation.getParam('dist');
    const region = {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00521,
    };
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapView}
          region={region}
        >
          <Marker
            coordinate={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
            }}
            title={name}
          />
        </MapView>
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
  mapView: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapDist;
