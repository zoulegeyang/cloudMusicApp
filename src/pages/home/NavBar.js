import React, { useState, useContext } from 'react'
import { View, Image, StyleSheet, Text, Pressable} from "react-native"
import { MyContext } from "../../../App"
const styles = StyleSheet.create({
    container: {
    //   flex:1,
      justifyContent:"space-around",
      flexDirection:"row",
      
      alignItems:'center',
      height:50
    },
    // stretch: {
    //   width: 50,
    //   height: 200,
    //   resizeMode: 'stretch',
    // },
  });
const NavBar = ({changeShow,hideShow}) => {
    const theme = useContext(MyContext)
    const [activeName,changeActiveName] = useState('我的');
    return (
        <>
        <View style={styles.container} >
            <Pressable onPress={()=>changeShow()} style={{flex:1,alignItems:'center'}}>
            <View  >
                <Image source={require("../../assets/list.png")} style={{width:20,height:20}}></Image>
            </View>
            </Pressable>
            <View style={{...styles.container,alignItems:"center",flex:5}}>
                <Text style={{fontSize:activeName=='我的'?30:20,color:activeName=='我的'?'black':'#333'}} onPress={()=>{changeActiveName('我的')}}>我的</Text>

                <Text style={{fontSize:activeName=='发现'?30:20,color:activeName=='发现'?'black':'#333'}} onPress={()=>{changeActiveName('发现')}}>发现</Text>

                
                <Text style={{fontSize:activeName=='云村'?30:20,color:activeName=='云村'?'black':'#333'}} onPress={()=>{changeActiveName('云村')}}>云村</Text>
                <Text style={{fontSize:activeName=='视频'?30:20,color:activeName=='视频'?'black':'#333'}} onPress={()=>{changeActiveName('视频')}}>视频</Text>
            </View>
            <View style={{flex:1,alignItems:'center'}}>
                <Image source={require("../../assets/search.png")} style={{width:20,height:20,}}></Image>
            </View>
        </View>
        </>
    )
}

export default NavBar