import React, {  useEffect, useMemo, useState } from 'react'
import { View, Text, Image, Button, StyleSheet, Pressable } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import {getAuthCodeApi,verifyCodeApi,passwordLoginApi} from "../../api/home"
// import { storeToken } from "../../storage/token"

// import { Toast } from "@ant-design/react-native"
const styles = StyleSheet.create({
    formItem:{
        marginTop:10
    }
})
const Login = () => {
    const navigation = useNavigation()
    const [isPasswordLogin,setIsPasswordLogin] = useState(false)
    const [phone,setPhone] = useState('')
    const [authcode,setAuthcode] = useState('')
    const [password,setPassword] = useState('')
    const isDisable = useMemo(()=>{
        if(phone.trim().length===11) {
            return false
        }else {
            return true
        }
    },[phone])
    
    const getAuthCode =async ()=>{
        // console.log('``````````')
        if(/^1[3|8|9][0-9]{9}/.test(phone)) {
            let params = {
                phone:phone
            }
            try{
                console.log('fff')
                let res = await getAuthCodeApi(params)
                let data = await res.json();
                console.log(data)
            }catch(e) {
                console.log(e,'eeeee')
            }
            // getAuthCodeApi(params)
        }else{
            console.log('sss')
            return;
        }
    }
    const authcodeLogin = async ()=>{
        try{
            let res = await verifyCodeApi({phone,captcha:authcode});
            let data = await res.json()
            console.log(data,phone,authcode)
        }catch(e) {
            console.log(e);
        }
    }
    const passwordLogin = async () =>{
        console.log('pasword')
        try{
            let res = await passwordLoginApi({phone,password});
            let data = await res.json()
            console.log(data,phone,password)
            if(data.code==200) {
            //    await storeToken(data.token)
            //    Toast.success('登录成功')
               navigation.navigate('Home')
            }else {
                console.log(data)
            }
        }catch(e) {
            console.log(e);
        }
    }
    // console.log(isDisable)
    return (
        <View style={{backgroundColor:'#ff0044',flex:1}}>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={{width:100,height:100,backgroundColor:'#dd2255',borderRadius:50, alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../../assets/netease-cloud-music-line.png')} style={{width:80,height:80,backgroundColor:'#dd2255',borderRadius:40,}}></Image>
            </View>
            </View>
            <View style={{flex:1,alignItems:'center'}}>
                <TextInput placeholder="请输入手机号"  onChangeText={(e)=>{setPhone(e);}} value={phone.trim()} placeholderTextColor="#333" style={{color:'#fff',width:'60%',...styles.formItem}} keyboardType="phone-pad" maxLength={11}></TextInput>
                {isPasswordLogin?
                <>
                    <TextInput placeholder="请输入验证码" onChangeText={(e)=>{setAuthcode(e);}} value={authcode.trim()} placeholderTextColor="#333" style={{color:'#fff',width:'60%',...styles.formItem}} secureTextEntry={true}></TextInput>
                    <View style={{...styles.formItem,width:'70%'}}>
                    <Button title='获取验证码' color='red' disabled={isDisable} onPress={()=>getAuthCode()}></Button>
                    </View>
                    <Pressable style={{marginTop:30,width:'70%',height:40,borderColor:'#eee',borderWidth:1,justifyContent:"center",borderRadius:20}} onPress={()=>authcodeLogin()}>
                    <Text style={{textAlign:'center',color:'#fff',}}>登录</Text>
                    </Pressable>
                    <Pressable style={{marginTop:30,width:'70%',height:40,borderColor:'#eee',borderWidth:1,justifyContent:"center",borderRadius:20}} onPress={()=>setIsPasswordLogin(!isPasswordLogin)}>
                    <Text style={{textAlign:'center',color:'#fff',}}>密码登录</Text>
                    </Pressable>
                </>
                :
                <>
                    <TextInput placeholder="请输入密码" onChangeText={(e)=>{setPassword(e);}} value={password.trim()} placeholderTextColor="#333" style={{color:'#fff',width:'60%',...styles.formItem}} secureTextEntry={true}></TextInput>
                    <Pressable style={{marginTop:30,width:'70%',height:40,borderColor:'#eee',borderWidth:1,justifyContent:"center",borderRadius:20}} onPress={()=>passwordLogin()}>
                    <Text style={{textAlign:'center',color:'#fff',}}>登录</Text>
                    </Pressable>
                    <Pressable style={{marginTop:30,width:'70%',height:40,borderColor:'#eee',borderWidth:1,justifyContent:"center",borderRadius:20}} onPress={()=>setIsPasswordLogin(!isPasswordLogin)}>
                    <Text style={{textAlign:'center',color:'#fff',}}>验证码登录</Text>
                    </Pressable>
                </>
                }
            </View>
        </View>
    )
}

export default Login