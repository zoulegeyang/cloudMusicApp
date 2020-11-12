import React, { useEffect } from "react"
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
// import {getToken} from "../../storage/token"
function Splash() {
    const navigation = useNavigation();
    // let flag;
    // getToken().then(res=>{
    //     flag = res;
    // })
    useEffect(()=>{
        let timer = setTimeout(()=>{
            // if(flag) {
            //     navigation.navigate('Home')
            // }else {
                navigation.navigate('Login')
            // }
        },2000)
        return ()=>{
            clearTimeout(timer)
        }
    },[])
    return (
        <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:'#fe0011'}}>
            <Text style={{color:'#fff'}}>音乐的力量</Text>
        </View>
    )
}

export default Splash