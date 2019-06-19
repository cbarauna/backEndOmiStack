import React from "react";

import { createAppContainer, createStackNavigation } from "react-navigation";
import { Image } from "react-native";
import logo from "./assets/logo.png";
import Feed from "./pages/Feed";
import New from "./pages/New";

export default createAppContainer(
  createStackNavigation(
    {
      Feed,
      New
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#000",
        headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
        headerBackTitle: null
      },
      mode: "modal"
    }
  )
);
