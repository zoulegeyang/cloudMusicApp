// // import AsyncStorage from '@react-native-async-storage/async-storage';

// export const storeToken = async (value) => {
//     try {
//       await AsyncStorage.setItem('token', value)
//     } catch (e) {
//       // saving error
//       console.log(e)
//     }
//   }

// export const getToken =  async () => {
//     try {
//       const value = await AsyncStorage.getItem('token')
//       if(value !== null) {
        
//         // value previously stored
//         return true
//       }else {
//           return false
//       }
//     } catch(e) {
//       // error reading value
//       console.log(e)
//     }
// }