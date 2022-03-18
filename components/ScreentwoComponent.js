import React from 'react';
import { View, Button, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreentwoComponent = ({ onPress }) => {

    const DATA = [
        {
            title: "Home",
            descriptiomn: "F-211, Shrinand Nagar Part-1, Nr. Vejalpur Bus-Stand, Vejalpur, Ahmedabad",
        },
        {
            title: "Home",
            descriptiomn: "F-211, Shrinand Nagar Part-1, Nr. Vejalpur Bus-Stand, Vejalpur, Ahmedabad",
        },
        {
            title: "Home",
            descriptiomn: "F-211, Shrinand Nagar Part-1, Nr. Vejalpur Bus-Stand, Vejalpur, Ahmedabad",
        },
        {
            title: "Home",
            descriptiomn: "F-211, Shrinand Nagar Part-1, Nr. Vejalpur Bus-Stand, Vejalpur, Ahmedabad",
        }
    ];

    const renderItem = ({ item }) => (
        <View style={styles.locationView}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require("../assets/location.png")}
                />
                <View style={{ marginHorizontal: 30 }}>
                    <Text style={styles.blueBoldText}>{item.title}</Text>
                    <Text style={styles.blackNormalText}>{item.descriptiomn}</Text>
                </View>
            </View>
            <Image
                source={require("../assets/menu.png")}
            />
        </View>
    );
    return (
        <SafeAreaView
            style={{
                backgroundColor: "#ffffff", paddingTop: 20,borderTopLeftRadius:30, borderTopRightRadius:30
            }}>
                <View style={{ marginHorizontal: 20}}>
            <View style={styles.addressView}>
                <Text style={styles.blackBoldText}>
                    Choose A Delivery Address
                </Text>
                <Image
                    style={{ rotation: 180 }}
                    source={require("../assets/arrow.png")}
                />
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ marginTop: 10 }}
            />
            <TouchableOpacity style={{ backgroundColor: "#562D80", borderRadius: 10,height:40, flexDirection: "row", justifyContent: "center" , marginVertical:10}}
                onPress={onPress}>
               
                    <Text style={styles.whiteText}>
                        Add New Address
                    </Text>
                  
               
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    locationView: { flexDirection: "row", justifyContent: 'space-between', paddingVertical: 10 },
    addressView: { flexDirection: "row", justifyContent: 'space-between' },
    blackNormalText: { color: "#130A1C", fontSize: 12, fontFamily: 'Montserrat-Regular' },
    blueBoldText: { color: "#562D80", fontSize: 14, fontFamily: 'Montserrat-Bold' },
    blackBoldText: { color: "#130A1C", fontSize: 14, fontFamily: 'Montserrat-Bold' },
    whiteText: { color: "#ffffff", fontSize: 14, marginTop: 10, fontFamily: 'Montserrat-Bold' }

})


export default ScreentwoComponent;
