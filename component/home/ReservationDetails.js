import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Alert,Button,Linking ,Dimensions} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const ReservationDetails = ({ route, navigation }) => {
    const openPaymentApp = async (payApp) => {

        let url = '';
        switch(payApp) {
            case 'PAYTM'   : url = 'paytmmp://'; break;
            case 'GPAY'    : url = 'tez://upi/'; break;
            case 'PHONEPE' : url = 'phonepe://'; break;
        }
        url = url + 'pay?pa=Khanakhajana@upi&pn=khanakhajana&mc=0000&tr=123456789ABCDEFG&tn=uid&am=100&cu=INR'
        // phonepe://pay?pa=your@vpa&pn=YourName&tn=Note&am=1&cu=INR
        console.log('URL : ',url);
        try {
            await Linking.openURL(url);
        }
        catch (err) {
          Alert.alert("app does not exsist in yout phone")
            console.error('ERROR : ',err);
        }
      }
    const [load, setload] = useState(true);
    const [pay, setpay] = useState({});
    const [status, setstatus] = useState([])
    const [specInfo, setspecInfo] = useState()
    const [temp, settemp] = useState()
    useEffect(() => {
        firestore().collection('DailyData').doc(route.params.date).onSnapshot(e => {
            setstatus({ reservTable1: e.data().reservTable1, reservTable2: e.data().reservTable2, reservTable3: e.data().reservTable3, reservTable4: e.data().reservTable4, reservTable5: e.data().reservTable5, reservTable6: e.data().reservTable6, reservTable7: e.data().reservTable7, reservTable8: e.data().reservTable8, reservTable9: e.data().reservTable9, reservTable10: e.data().reservTable10, reservTable11: e.data().reservTable11, reservTable12: e.data().reservTable12, reservTable13: e.data().reservTable13, reservTable14: e.data().reservTable14, reservTable15: e.data().reservTable15, reservTable16: e.data().reservTable16, table: e.data().table })
        })
        setpay(route.params.alldata)
        setspecInfo(route.params.table)
        setload(false)
    }, [])
    const bs = React.createRef();
    const fall = new Animated.Value(1);
    const lowerScreen = () => (
        <View style={{ backgroundColor: 'white' }}>
            <Text>This payment is for security purpose this amount will be minus from your bill.</Text>
            <Button title='PAYTM'    onPress={() => openPaymentApp('PAYTM')}/>
            <Button title='GPAY'     onPress={() => openPaymentApp('GPAY')}/>
            <Button title='PHONE PE' onPress={() => openPaymentApp('PHONEPE')}/>
            <Button title="Cancle" onPress={() => { bs.current.snapTo(1) }} />
        </View>
    )
    const lowerHeader = () => (
        <View style={{ backgroundColor: 'white' }}>
        <Text>Pay now</Text>
        </View>
    )
    const bookPay = async () => {
        
        switch (route.params.table.id) {
            case "1":
                status.reservTable1.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "2":
                status.reservTable2.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "3":
                status.reservTable3.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "4":
                status.reservTable4.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "5":
                status.reservTable5.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "6":
                status.reservTable6.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break; break;
            case "7":
                status.reservTable7.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "8":
                status.reservTable8.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "9":
                status.reservTable9.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "10":
                status.reservTable10.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "11":
                status.reservTable11.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "12":
                status.reservTable12.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "13":
                status.reservTable13.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "14":
                status.reservTable14.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "15":
                status.reservTable15.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
            case "16":
                status.reservTable16.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                break;
        }        Alert.alert("Your payment Successfull")

        navigation.reset({
            index: 0,
            routes: [{ name: 'DatePicker' }],
        }
        );
    }
    return (
        <View style={{width:screenWidth,height:screenHeight}}>
            {(load) ? (<ActivityIndicator />) : (<>
                <Text>table number : {specInfo.id}</Text>
                <Text>table type : {specInfo.tableType}</Text>
                <TouchableOpacity onPress={bookPay} style={{ fontSize: 20, textAlign: 'center', backgroundColor: "orange", padding: 20, margin: 20, borderRadius: 30 }}><Text style={{ textAlign: 'center' }}>Book</Text></TouchableOpacity>
            </>)}
            <Button title="Pay for book" onPress={() => { bs.current.snapTo(0) }} />
            <BottomSheet
                    ref={bs}
                    snapPoints={[screenHeight/2, 0]}
                    initialSnap={1}
                    renderContent={lowerScreen}
                    renderHeader={lowerHeader}
                    callbackNode={fall}
                    enabledGestureInteraction={true}
                />
        </View>
    )
}

export default ReservationDetails

const styles = StyleSheet.create({})
