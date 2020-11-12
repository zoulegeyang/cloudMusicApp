import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from "../pages/home"
import Splash from "../pages/splash"
import Login from "../pages/login"

// import {getToken} from "../storage/token"
const FullStack = createStackNavigator();

function Router() {
  // console.log(getToken())
  return (

      <FullStack.Navigator initialRouteName="Splash" headerMode="none">
        <FullStack.Screen name="Splash" component={Splash} />
          <FullStack.Screen name="Home" component={Home} />
          <FullStack.Screen name="Login" component={Login} />
        
        
      </FullStack.Navigator>
  );
}

export default Router;