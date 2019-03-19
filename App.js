import React from "react";
import { createAppContainer } from "react-navigation";
import Drawer from "./components/drawer";

const Appcontainer = createAppContainer(Drawer);

const App = () => (
  <Appcontainer />
);

export default App;
