import React,{useContext} from 'react'
import { Animated, Pressable, Text, View } from 'react-native'
import {MyContext} from "../../../App"
const SliderBarBottom = ({hideShow}) => {
    const { theme,dispatch} = useContext(MyContext)
    return (
        <View style={{position:"absolute",bottom:0,flexDirection:"row",borderTopColor:'#eee',borderTopWidth:1}}>
                <View style={{flex:1,height:40,justifyContent:"center",}}>
                    {
                        theme.bgc=='#fff'?
                        <Text style={{textAlign:'center',}} onPress={()=>{dispatch('black');hideShow()}}>夜间模式</Text>
                        :
                        <Text style={{textAlign:'center',}} onPress={()=>{dispatch('white');hideShow()}}>日间模式</Text>
                    }
                </View>
                <View style={{flex:1,height:40,justifyContent:"center",}}>
                    <Text style={{textAlign:'center'}}>设置</Text>
                </View>
            </View>
    )
}

export default SliderBarBottom