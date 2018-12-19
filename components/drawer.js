import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Stack from './stack';
import Custom from './custom';
import MapDist from './mapDist';

const Drawer = createDrawerNavigator({
  Home: { screen: Stack },
  Dist: { screen: MapDist, },
}, {
  drawerWidth: 350,
  drawerBackgroundColor: 'white',
  drawerType: 'front',
  contentComponent: Custom,
});

export default Drawer;
