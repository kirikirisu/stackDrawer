import React from "react";
import { TouchableOpacity } from "react-native";
import CalendarIcon from "react-native-vector-icons/EvilIcons";

const headerRight = ({ navigation }) => (
  <TouchableOpacity>
    <CalendarIcon
      name="calendar"
      size={35}
      style={{ marginRight: 10 }}
    />
  </TouchableOpacity>
);

export  default headerRight;
