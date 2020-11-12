import React, { useContext, useState } from "react"
import { View, Text } from 'react-native';
import NavBar from "./NavBar"
import SliderBar from "./SlideBar"
import { MyContext } from "../../../App"
function HomeScreen() {
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home 2123</Text>
      </View>
      </View>
      
    );
}

export default HomeScreen