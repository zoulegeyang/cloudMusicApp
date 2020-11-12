import React, { Children, useContext, useEffect, useState } from "react"
import { View, Text } from 'react-native';
import NavBar from "./NavBar"
import SliderBar from "./SlideBar"
import { MyContext } from "../../../App"
import { createStackNavigator } from '@react-navigation/stack';

//路由
import Profile from "../profile"
import Find from "../find"
import Country from "../cloudcountry"
import Video from "../video"
const HomeStack = createStackNavigator()

function HomeScreen({navigation}) {
  const {theme} = useContext(MyContext);
  // console.log(theme)
  const [ isShow, setShow ] = useState(false)
  const changeShow = ()=>{
    setShow(!isShow)
  }
  const hideShow = ()=>{
    setShow(false)
  }
    return (
      <View style={{flex:1,backgroundColor:theme.bgc}}>
        <SliderBar isShow={isShow} hideShow={hideShow}></SliderBar>
        <NavBar changeShow={changeShow} ></NavBar>
          <HomeStack.Navigator initialRouteName="Profile" headerMode="none" style={{ flex: 1 }} >
            <HomeStack.Screen name="Profile" component={Profile}></HomeStack.Screen>
            <HomeStack.Screen name="Find" component={Find}></HomeStack.Screen>
            <HomeStack.Screen name="Country" component={Country}></HomeStack.Screen>
            <HomeStack.Screen name="Video" component={Video}></HomeStack.Screen>
          </HomeStack.Navigator>
      </View>
      
    );
}

export default HomeScreen