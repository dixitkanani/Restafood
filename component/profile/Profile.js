import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Alert, Button, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Avatar, Title, Caption, TouchableRipple, useTheme } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Profile({ navigation }) {
    const [profile, setprofile] = useState()
    const [path, setpath] = useState()
    const [upLoading, setupLoading] = useState(false)
    const [load, setload] = useState(true);
    
    const [status, setstatus] = useState(null)
    const { colors } = useTheme();
    const bs = React.createRef();
    const fall = new Animated.Value(1);
    const myCustomShare = async() => {
    }
    
    const lowerScreen = () => (
        <View style={{ backgroundColor: 'white' }}>
            <Text>hii</Text>
            <Button title="Take Image from Camara" onPress={imageFromGallary} />
            <Button title="Take Image from Gallary" onPress={imageFromCamara} />
            <Button title="Cancle" onPress={() => { bs.current.snapTo(1) }} />
        </View>
    )
    const lowerHeader = () => (
        <View style={{ backgroundColor: 'white' }}>
        {(status===null)          
        ?<View>
        <Text>upload image</Text>
        </View>
        :<Text>{status}"%"</Text>}
        </View>
    )
    const imageFromGallary = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            const img = Platform.OS === 'ios' ? image.sourceURL : image.path
            selectImage(img)
        });
    }
    const imageFromCamara = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            const img = Platform.OS === 'ios' ? image.sourceURL : image.path
            selectImage(img);
        })

    }
    const selectImage = async (img) => {
        const x = img;
        let temppath = x.substring(x.lastIndexOf('/') + 1);
        const extention = temppath.split('.').pop();
        const name = temppath.split('.').slice(0, -1).join('.');
        temppath = name + Date.now() + "." + extention;
        setupLoading(true);
        const task = storage().ref(temppath).putFile(x);

        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
            setstatus(Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100)
        });

        task.then(() => {
            console.log('Image uploaded to the bucket!');
        });
        try {
            await task;
            await firestore().collection("users").doc(auth().currentUser.uid).update({ dp: (await (storage().ref(temppath).getDownloadURL()))})
            setupLoading(false)
            setstatus(null)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        firestore().collection('users').doc(auth().currentUser.uid).onSnapshot((e)=>{setprofile(e.data());setload(false)})
    }, [])
    const logOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    return (<View>
        <ScrollView>
          
            
            {(load) ? (<ActivityIndicator />) : (<>
                <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
       
          <Avatar.Image 
            source={{
              uri: 'https://download.flaticon.com/download/icon/147144?icon_id=147144&author=1&team=1&keyword=Avatar&pack=147128&style=3&style_id=23&format=png&color=%23000000&colored=2&size=512&selection=1&premium=0&type=standard&token=03AGdBq25LW0ipUbhb82rkfBAKTcjxiuByUB9WsrEYM8MsZRFyBO5B53t-1LWYTYNg8p2BHQ_D-giooCUzumM6V1x62Dtx7zngHRJhbJJYcJW8UUNLJNkOqywkGEDkrcJA1jsCTvnT24kDPJnoTT3H-Mbgd26OPY9hKJ3N_JAuzdlWfx6qpRw_lMG7OwbmUBH8zOzj-yYtlXJIiIdiBOMZuvHRr8E3RcoO4FxavFJjGwAjaOraJdpPpR3JCqEAhMee47-X7xNlKAp4sM5i8RwEu-AWlb9gK2VxBDvCLlUyKCzfn7MTUCSqm4riaiGDJ7749H4yXcrQutedEKIb83o1AIodkUoGCKofL82Vm7_nCCc7ud9hUVSP1mDHqDzbpgXiDLToqhG58b2GlSzUlsWMZaqT3cQTYX1JaM92L_h_OjtLpEdsGVGe1pNwMt2EBEdLsYKgY8LYK9PbakgH--CV8M9p9VswHdpWUF6k10Ib-vKW2ALZ1YIP8XMrv00vcC0Y5hp9OJKSn6mqetd_F_9aruCcOFOB6uTI3Y-fzIDSjAgp1K_d5Pib-zRSvIARUbswe4JNCWXsic3IkwgrR1sEzUkMVc1NjY1ZLWYyENkwWb0-ZjMm1boE-JRVQk7HzcT3a9pc0JnqAvIObI2pHtiq3PQH5ZeEVEoPIg4YaG8cw32uHWR9TqXcuCaTQ7v0hRTFrQBfJLitn5XLOMyTk0uiaJ5eT01fg2jT2qgzWDB54swb6RWln53afzxgWrdn3yLy_FxWT5r2eelETDtU8FFRW2xnIBosNGo0AJdc-Z3mdv9mf6egJsQl4EBPigqzR9k_nQ4f37RcRUQ2-T1UwJkQILwtpQ6Vf5yCnCWIz68er8OHtCEdFf7FWkXQHaa5B_q-NfBtAN__Wl0HajzL__c9hzqVXVQBqjPnieMsEFG2acnAikQwwFlCqk7RDdhqoLw2XcLathh4UmQoy3afkXHBd_T_aoGR_KmWrwRpaEKlaXgAFkPHiHgdemJygxSssVU732A0p-54AK1-D9py_ZP_TY6wr4ZTMpWgC9V_JSW7xtAdxjUZJdcAyPqi7DYgauxHVik3MCvkwSVU-jodhPpqiMci4vzzln4ZA-12oraGXyhrVoPTgbTbOZyMypW-x1blA6-hsSF9KNE_9hzFdWUnnvVJGx0hzVsP_kcErXcS0AJMuuerc8HSONxtOby6TGkzzcjN3P0gcA7_KMoZatj1XvrMJOztlC-d_gKtlZylF-otMwR1txRwW6Gh4P7tbt0Kqur1BCUbSFQe_4QydGaGaBFDT_c-fvPlSw&_gl=1*yddli0*test_ga*MTI0OTA1NzEyNS4xNjM1OTU5MzA2*test_ga_523JXC6VL7*MTYzNTk1OTMwNy4xLjEuMTYzNTk1OTM1NS4xMg..*_ga*MTI0OTA1NzEyNS4xNjM1OTU5MzA2*_ga_3Q8LH3P0VP*MTYzNTk1OTMwNy4xLjEuMTYzNTk1OTM1Ni4w',
            }}
            size={80}
          />
         
         
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{profile.fname + " " + profile.lname}</Title>
            <Caption style={styles.caption}>@{profile.fname }</Caption>
          </View>
        </View>
      </View>
     
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="account-settings" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{profile.userName}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{profile.number}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{profile.email}</Text>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => (navigation.navigate('myProfile', { profile: profile }))}>
          <View style={styles.menuItem}>
            <Icon name="account-details" color="#152238" size={25}/>
            <Text style={styles.menuItemText}>My Profile</Text>
          </View>
        </TouchableRipple>
        
        
        <TouchableRipple onPress={() => (navigation.navigate('GallaryData'))}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#152238" size={25}/>
            <Text style={styles.menuItemText}>Gallary</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => (navigation.navigate('aboutUs'))}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#152238" size={25}/>
            <Text style={styles.menuItemText}>About Us & Share</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple  onPress={logOut}>
          <View style={styles.menuItem}>
            <Icon name="account-off" color="#152238" size={25}/>
            <Text style={styles.menuItemText}>Log-Out</Text>
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>Visit</Title>
            <Caption>RestaFood</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>Again</Title>
            <Caption>RestaFood</Caption>
          </View>
      </View>

               
            </>)}
        </ScrollView>
    </View>);
}
const styles = StyleSheet.create({
    pbutton: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
    },
    pimg: {
        margin: 20,
        height: 150,
        width: 150,
        borderRadius: 60,
        marginTop: 140
    },
    data: {
        flex: 1
    },
    container: {
        
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop: 4,
        marginHorizontal: 10,
    },
    txt: {
        fontSize: 23
    },
    container: {
        flex: 1,
      },
      userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },

});