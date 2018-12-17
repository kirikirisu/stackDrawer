import React from "react";
import { TouchableOpacity } from "react-native";
import SearchIcon from "react-native-vector-icons/AntDesign";

const HeaderLeft = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <SearchIcon
      name="search1"
      size={25}
      style={{ marginLeft: 15 }}
    />
  </TouchableOpacity>
);

export default HeaderLeft;
