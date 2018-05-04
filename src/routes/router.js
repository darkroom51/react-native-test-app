import {StackNavigator} from "react-navigation";

import {ROUTE_HOME, ROUTE_DETAILS, ROUTE_NOTES} from "../consts/router";
import UserLogin from "../components/UserLogin/UserLogin";
import UserDetails from "../components/UserDetails/UserDetails";
import Notes from "../components/Notes/Notes";

export const RootStack = StackNavigator(
  {
    [ROUTE_HOME]: {
      screen: UserLogin,
    },
    [ROUTE_DETAILS]: {
      screen: UserDetails,
    },
    [ROUTE_NOTES]: {
      screen: Notes,
    }
  },
  {
    initialRouteName: ROUTE_NOTES,
  }
);