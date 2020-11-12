import React, { useContext, useEffect, } from 'react'
import { Animated, Pressable, Text, View } from 'react-native'
import SliderBarBottom from "./SliderBarBottom"
import {MyContext} from "../../../App"
import HideBar from "./HideBar"
const SlideBar = ({isShow,hideShow}) => {
    // 注意的是,positon设置为其他属性默认相当于把display设置为flex
    const fadeAnimSlide = (new Animated.Value(-300))
    const fadeAnimRig = (new Animated.Value(0))
    // console.log(fadeAnimSlide)
    useEffect(() => {
        Animated.timing(                  
            fadeAnimSlide,                
          {
            toValue: 0,                   
            duration: 400,
            useNativeDriver: true,        
          }
        ).start();                       
      }, [fadeAnimSlide])
      useEffect(() => {
        Animated.timing(                 
            fadeAnimRig,                 
          {
            toValue: 300,                 
            duration: 400,
            useNativeDriver: true,        
          }
        ).start();                        
      }, [fadeAnimRig])
      const {theme} = useContext(MyContext)
    return (
        <View style={{display:isShow?'flex':'none',position:isShow?'absolute':'relative',zIndex:99,flexDirection:'row',height:'100%',flex:1,width:'100%'}}>
        <Animated.View style={{backgroundColor:theme.bgc,width:300,transform:[{translateX:fadeAnimSlide}]}}>

            <Text>SlideBar</Text>
            <SliderBarBottom hideShow={hideShow}></SliderBarBottom>
        </Animated.View>
        <Animated.View style={{backgroundColor:'black',height:'100%',width:'100%',opacity:0.5,transform:[{translateX:fadeAnimSlide}]}}>
            <HideBar hideShow={hideShow}></HideBar>
        </Animated.View>
        </View>
        
    )
}

export default SlideBar