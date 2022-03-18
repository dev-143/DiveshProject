import React from 'react';
import { View, Button, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenFourComponent = ({ navigation }) => {

    

    return (
        <SafeAreaView
            style={{
                backgroundColor: "#ffffff", paddingTop: 20,borderTopLeftRadius:30, borderTopRightRadius:30
            }}>
                <View style={{ marginHorizontal: 20, paddingVertical:40}}>
            <View style={styles.addressView}>
                <Text style={styles.blackBoldText}>
                   Confirm Delivery Location    
                </Text>
                <Image
                    style={{ rotation: 180 }}
                    source={require("../assets/arrow.png")}
                />
            </View>
            <View style={styles.locationView}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require("../assets/location.png")}
                />
                <View style={{ marginHorizontal: 30, marginBottom:30 }}>
                    <Text style={styles.blueBoldText}>Home</Text>
                    <Text style={styles.blackNormalText}>F-211, Shrinand Nagar Part-1, Nr. Vejalpur Bus-Stand, Vejalpur, Ahmedabad</Text>
                </View>
            </View>
            <Image
                source={require("../assets/menu.png")}
            />
        </View>
            <TouchableOpacity style={{ backgroundColor: "#562D80", borderRadius: 10,height:40, flexDirection: "row", justifyContent: "center" }}
                onPress={() => {  }}>
               
                    <Text style={styles.whiteText}>
                        Confirm Location
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


export default ScreenFourComponent;
