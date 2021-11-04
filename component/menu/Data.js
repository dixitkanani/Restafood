import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';

const Data = () => {
    useEffect(() => {
        const removeData = async () => {
            try {
                await AsyncStorage.clear();
            } catch (error) {
                console.log(error);
            }
        }
        // removeData()
    }, [])


    const setData = async () => {

        try {
            var user = {
                table: [
                    {
                        "id": "1",
                        "tableType": "couple",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "2",
                        "tableType": "couple",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "3",
                        "tableType": "couple",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "4",
                        "tableType": "couple",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "5",
                        "tableType": "couple",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "6",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "7",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "8",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "9",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "10",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "11",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "12",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "13",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "14",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "15",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "16",
                        "tableType": "large",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    }
                ],
            }
            await AsyncStorage.setItem('Reservation', JSON.stringify(user));
        } catch (error) {
            console.log(error);
        }
        try {
            var user = {
                user: [
                    {
                        "id": "1",
                        "username": "keyur_gondaliya403",
                        "password": "......",
                        "fname": "Keyur",
                        "lname": "Gondaliya",
                        "phone": "123123123",
                        "email": "gondaliya1317@gmail.com",
                        "img": "require('../../assets/images/profile.jpeg')",
                        "points": "100",
                        "orderList":[]
                    }
                ],
            }
            await AsyncStorage.setItem('Userdata', JSON.stringify(user));
        } catch (error) {
            console.log(error);
        }
        try {
            var user = {
                menuData :[{
                    id: '1',
                    name: 'Gujarati',
                    im: require("../../assets/images/Gujarati/i1.jpg"),
                    list : [
                        { name: "Gujarati thadi", isselected: false ,price:190,suggestions:'',quantity:'full'},
                      { name: "Gathiya", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
                      { name: "Fafda", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
                      { name: "Papadi", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
                      { name: "Naylon Gathiya", isselected: false ,price:35,suggestions:'',quantity:'100gm'},
                      { name: "Ghi jalebi", isselected: false ,price:50,suggestions:'',quantity:'100gm'},
                      { name: "Methi Bhajiya", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
                      { name: "Mix Bhajiya", isselected: false ,price:35,suggestions:'',quantity:'100gm'},
                      { name: "Bateka Bhajiya", isselected: false ,price:30,suggestions:'',quantity:'100gm'},
                      { name: "Marcha Bhajiya", isselected: false ,price:30,suggestions:'',quantity:'100gm'},
                      { name: "Naylon khaman", isselected: false ,price:25,suggestions:'',quantity:'100gm'},
                      { name: "Vatidal khaman", isselected: false ,price:20,suggestions:'',quantity:'100gm'},
                      { name: "Chips", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
                      { name: "Methina thepla", isselected: false ,price:20,suggestions:'',quantity:'100gm'},
                      { name: "Butter thepla", isselected: false ,price:30,suggestions:'',quantity:'3 peace'},
                      { name: "Sukibhaji", isselected: false ,price:20,suggestions:'',quantity:'3 peace'},
                      { name: "Dahi", isselected: false ,price:15,suggestions:'',quantity:'100gm'},
                      { name: "Rajvadi Chhas", isselected: false ,price:10,suggestions:'',quantity:'100 ml'},
                    ]
                  },
                  {
                    id: '2',
                    name: 'Panjabi',
                    im: require("../../assets/images/Panjabi/mcms.jpg"),
                    list: [
                      { name: "a2", isselected: false,price:100,suggestions:'',quantity:'' },
                      { name: "b2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i2", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                  {
                    id: '3',
                    name: 'Chainese',
                    im: require("../../assets/images/Chainese/logo.jpg"),
                    list:[
                      { name: "a3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "b3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i3", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                  {
                    id: '4',
                    name: 'FastFood',
                    im: require("../../assets/images/FastFood/i1.jpg"),
                    list:[
                      { name: "a4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "b4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i4", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                  {
                    id: '5',
                    name: 'SouthIndian',
                    im: require("../../assets/images/SouthIndian/download.jpg"),
                    list: [
                      { name: "a5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "b5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i5", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                  {
                    id: '6',
                    name: 'Desert',
                    im: require("../../assets/images/Dasert/d1.jpg"),
                    list: [
                      { name: "a6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "b6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i6", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                  {
                    id: '7',
                    name: 'Cold Drinks',
                    im: require("../../assets/images/ColdDrinks/cd1.jpeg"),
                    list: [
                      { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                ]
            }
            await AsyncStorage.setItem('Menudata', JSON.stringify(user));
        } catch (error) {
            console.log(error);
        }        
    }
    
    setData();
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Data

const styles = StyleSheet.create({})

// firestore()
//   .collection('Table')
//   .doc('tableId')                                       //table
//   .set({data:[
//       {
//           "id": "1",
//           "tableType": "couple",
//           "busy": false
//       },
//       {
//           "id": "2",
//           "tableType": "couple",
//           "busy": false
//       },
//       {
//           "id": "3",
//           "tableType": "couple",
//           "busy": false
//       },
//       {
//           "id": "4",
//           "tableType": "couple",
//           "busy": false
//       },
//       {
//           "id": "5",
//           "tableType": "couple",
//           "busy": false
//       },
//       {
//           "id": "6",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "7",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "8",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "9",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "10",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "11",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "12",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "13",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "14",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "15",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "16",
//           "tableType": "large",
//           "busy": false
//       }
//     ]})
//   .then(() => {
//     console.log('User added!');
//   });

// firestore()
//   .collection('Menu')
//   .doc('menuId')
//   .set({menuData :[{
//     id: '1',
//     name: 'Gujarati',
//     im: 'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/menuIcon%2Fi1.jpg?alt=media&token=73db50dd-a370-44de-80fe-407f4951857e',
//     list : [
//         { name: "Gujarati thadi", isselected: false ,price:190,suggestions:'',quantity:'full'},
//       { name: "Gathiya", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
//       { name: "Fafda", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
//       { name: "Papadi", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
//       { name: "Naylon Gathiya", isselected: false ,price:35,suggestions:'',quantity:'100gm'},
//       { name: "Ghi jalebi", isselected: false ,price:50,suggestions:'',quantity:'100gm'},
//       { name: "Methi Bhajiya", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
//       { name: "Mix Bhajiya", isselected: false ,price:35,suggestions:'',quantity:'100gm'},
//       { name: "Bateka Bhajiya", isselected: false ,price:30,suggestions:'',quantity:'100gm'},
//       { name: "Marcha Bhajiya", isselected: false ,price:30,suggestions:'',quantity:'100gm'},
//       { name: "Naylon khaman", isselected: false ,price:25,suggestions:'',quantity:'100gm'},
//       { name: "Vatidal khaman", isselected: false ,price:20,suggestions:'',quantity:'100gm'},
//       { name: "Chips", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
//       { name: "Methina thepla", isselected: false ,price:20,suggestions:'',quantity:'100gm'},
//       { name: "Butter thepla", isselected: false ,price:30,suggestions:'',quantity:'3 peace'},
//       { name: "Sukibhaji", isselected: false ,price:20,suggestions:'',quantity:'3 peace'},
//       { name: "Dahi", isselected: false ,price:15,suggestions:'',quantity:'100gm'},
//       { name: "Rajvadi Chhas", isselected: false ,price:10,suggestions:'',quantity:'100 ml'},
//     ]
//   },
//   {
//     id: '2',
//     name: 'Panjabi',
//     im: 'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/menuIcon%2Fmcms.jpg?alt=media&token=33606394-7e60-4774-94cf-41b89c5c6063',
//     list: [
//       { name: "a2", isselected: false,price:100,suggestions:'',quantity:'' },
//       { name: "b2", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "c2", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "d2", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "e2", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "f2", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "g2", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "h2", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "i2", isselected: false,price:100,suggestions:'',quantity:''},
//     ]
//   },
//   {
//     id: '3',
//     name: 'Chainese',
//     im: 'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/menuIcon%2Flogo.jpg?alt=media&token=11e90afa-4fcd-42a4-b1b1-69261c07a613',
//     list:[
//       { name: "a3", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "b3", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "c3", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "d3", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "e3", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "f3", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "g3", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "h3", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "i3", isselected: false,price:100,suggestions:'',quantity:''},
//     ]
//   },
//   {
//     id: '4',
//     name: 'FastFood',
//     im: 'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/menuIcon%2Fi1.jpg?alt=media&token=73db50dd-a370-44de-80fe-407f4951857e',
//     list:[
//       { name: "a4", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "b4", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "c4", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "d4", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "e4", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "f4", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "g4", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "h4", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "i4", isselected: false,price:100,suggestions:'',quantity:''},
//     ]
//   },
//   {
//     id: '5',
//     name: 'SouthIndian',
//     im: 'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/menuIcon%2Fdownload.jpg?alt=media&token=c6e11930-309f-4897-8a6e-aed06b102137',
//     list: [
//       { name: "a5", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "b5", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "c5", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "d5", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "e5", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "f5", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "g5", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "h5", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "i5", isselected: false,price:100,suggestions:'',quantity:''},
//     ]
//   },
//   {
//     id: '6',
//     name: 'Desert',
//     im: 'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/menuIcon%2Fd1.jpg?alt=media&token=3d2e15bb-50d3-480c-b2ff-12cdf3263e63',
//     list: [
//       { name: "a6", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "b6", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "c6", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "d6", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "e6", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "f6", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "g6", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "h6", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "i6", isselected: false,price:100,suggestions:'',quantity:''},
//     ]
//   },
//   {
//     id: '7',
//     name: 'Cold Drinks',
//     im: 'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/menuIcon%2Fcd1.jpeg?alt=media&token=0526e4ca-4277-4bc9-a306-31e775b8a738',
//     list: [
//       { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//       { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//     ]
//   },
// ]})
//   .then(() => {
//     console.log('User added!');
//   });