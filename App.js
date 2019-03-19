import React from "react";
import { createAppContainer } from "react-navigation";
import drawer from "./components/drawer";

const AppContainer = createAppContainer(drawer);

const App = () => (
  <AppContainer />
);

export default App;
