import React from 'react'
import {Pressable} from "react-native"

const HideBar = ({hideShow}) => {
    return (
        <Pressable onPress={()=>hideShow()} style={{height:'100%',width:'100%',opacity:0.5}}>
        
        
        </Pressable>
    )
}

export default HideBar