import {StackNavigator} from "react-navigation";

import {ROUTE_HOME, ROUTE_DETAILS} from "../consts/router";
import UserLogin from "../components/UserLogin/UserLogin";
import UserDetails from "../components/UserDetails/UserDetails";

export const RootStack = StackNavigator(
  {
    [ROUTE_HOME]: {
      screen: UserLogin,
    },
    [ROUTE_DETAILS]: {
      screen: UserDetails,
    },
  },
  {
    initialRouteName: ROUTE_HOME,
  }
);