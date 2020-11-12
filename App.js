/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Router from "./src/router"
import { Provider } from "@ant-design/react-native"
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home 2123</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();
export const MyContext = React.createContext();
const initialState = {bgc: '#fff',color:'#000'};

function reducer(state, action) {
  switch (action) {
    case 'white':
      return {bgc:'#fff',color:'#000' };
    case 'black':
      return {bgc: '#111',color:'#ffe'};
    default:
      return ;
  }
}

import { userIniState,userReducer} from "./src/reducer/user"

function App() {

  const [theme,dispatch] = React.useReducer(reducer,initialState);
  const [userId,userDispatch] = React.useReducer(userReducer,userIniState)
  return (
    <Provider>
    <MyContext.Provider value={{theme,dispatch,user:{userId,userDispatch}}} >
    <NavigationContainer>
      <Router></Router>
    </NavigationContainer>
    </MyContext.Provider>
    </Provider>
  );
}

export default App;