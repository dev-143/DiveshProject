import React from 'react';
import { View, Button, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenThreeComponent = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                backgroundColor: "#ffffff",borderTopLeftRadius:30, borderTopRightRadius:30
            }}>
            <ScrollView>
                <View style={{ backgroundColor: "#562D80", height: 40, flexDirection: "row",borderTopLeftRadius:30, borderTopRightRadius:30 }}>
                    <Image
                        style={{marginStart:20, marginTop:7, justifyContent: "center"}}
                        source={require("../assets/whiteCircle.png")}
                    />
                     <Image
                        style={{marginStart:26, position: "absolute",alignSelf: "center"}}
                        source={require("../assets/percent.png")}
                    />
                    <Text style={[styles.whiteText,{fontSize: 14,alignSelf: "center"}]}>You have saved ₹51 on the bill</Text>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <View style={styles.locationView}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require("../assets/location.png")}
                            />
                            <Text style={{ marginStart: 10 }}>
                                <Text style={styles.blackNormalText}>Delivery at</Text>
                                <Text style={styles.blueBoldText}> Home - vejalpur</Text>
                            </Text>
                        </View>
                        <Image
                            // style={{height:20, width:18}}
                            source={require("../assets/arrow.png")}
                        />
                    </View>

                    <View style={styles.historyView}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require("../assets/History.png")}
                            />
                            <Text style={{ marginStart: 10 }}>
                                <Text style={styles.blackNormalText}>Schedule Date and Time</Text>
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={styles.blackNormalText}>
                                    Monday
                                </Text>
                                <Text style={styles.blueSemiBoldText}>
                                    9:00 AM
                                </Text>
                            </View>
                            <View style={{ marginStart: 10 }}>
                                <Text style={styles.blackNormalText}>
                                    Tuesday
                                </Text>
                                <Text style={styles.blueSemiBoldText}>
                                    7:00 PM
                                </Text>
                            </View>
                        </View>
                        <Image
                            // style={{height:20, width:18}}
                            source={require("../assets/arrow.png")}
                        />
                    </View>

                    <View style={styles.subViewAmount}>
                        <Text style={styles.blackBoldText}>
                            Wash & Fold Shirt
                        </Text>
                        <Text style={styles.blueSemiBoldText}>
                            &#8377;115
                        </Text>
                    </View>

                    <View style={styles.subViewAmount}>
                        <View>
                            <Text style={[styles.blackBoldText, { fontSize: 12 }]}>
                                Add on:
                            </Text>
                            <Text style={styles.blackNormalText}>
                                -Iron Press
                            </Text>
                        </View>
                        {/* TODO + - picker */}
                    </View>

                    <TextInput
                        style={{
                            height: 40,
                            margin: 5,
                            borderBottomColor: "#D1CBD7",
                            borderBottomWidth: 1,
                            fontSize: 12,
                            fontFamily: 'Montserrat-Regular'
                        }}
                        placeholder="Add Clothing Instructions for vendor (Optional)"
                    />

                    <View style={styles.couponView}>

                        <Image
                            source={require("../assets/coupon.png")}
                        />
                        <Text style={[styles.blackBoldText, { fontSize: 12, marginStart: 10 }]}>
                            Apply Coupon
                        </Text>
                    </View>

                    <TextInput
                        style={{
                            height: 40,
                            margin: 5,
                            borderBottomColor: "#D1CBD7",
                            borderBottomWidth: 1,
                            fontSize: 12,
                            fontFamily: 'Montserrat-Regular'
                        }}
                        placeholder="Select a promo code"
                    />

                    <View style={styles.amountTotalView}>
                        <View style={styles.locationView}>
                            <Text style={[styles.blackNormalText, { fontSize: 14 }]}>
                                Item Total
                            </Text>
                            <Text style={[styles.blackNormalText, { fontSize: 14 }]}>
                                &#8377;115
                            </Text>
                        </View>
                        <View style={styles.locationView}>
                            <Text style={styles.blackNormalText}>
                                Delivery Charge
                            </Text>
                            <Text style={styles.blackNormalText}>
                                &#8377;115
                            </Text>
                        </View>
                        <View style={styles.historyView}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    source={require("../assets/diamond.png")}
                                />
                                <Text style={[styles.blackBoldText, { fontSize: 12, marginStart: 10 }]}>
                                    Your reward credit
                                </Text>
                            </View>
                            <Text style={[styles.blackBoldText, { fontSize: 12, marginStart: 10 }]}>
                                &#8377;115
                            </Text>
                        </View>
                        <View style={styles.historyView}>
                            <Text style={[styles.blackBoldText, { fontSize: 12 }]}>
                                Grand Total
                            </Text>
                            <Text style={[styles.blackBoldText, { fontSize: 12 }]}>
                                &#8377;115
                            </Text>
                        </View>
                    </View>

                    <View style={styles.historyView}>
                        <Text style={[styles.blackBoldText, { fontSize: 14 }]}>
                            Delivery Instruction
                        </Text>
                        <Text style={[styles.blueBoldText, { fontSize: 14 }]}>
                            Change
                        </Text>
                    </View>

                    <TextInput
                        style={{
                            height: 40,
                            borderBottomColor: "#D1CBD7",
                            borderBottomWidth: 1,
                            fontSize: 12,
                            justifyContent: 'space-between'
                        }}
                        placeholder="Type a message"
                    />

                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <Image
                            source={require("../assets/bill.png")}
                        />
                        <View style={{ marginStart: 10 }}>
                            <Text style={[styles.blackBoldText, { fontSize: 14 }]}>Review your order and address details to avoid cancellations</Text>
                            <Text style={styles.blueSemiBoldText}>Read Policy</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={[styles.historyView,{marginHorizontal: 20}]}>
                <View>
                    <View style={styles.couponView}>
                        <Image
                            style={{ height: 20, width: 18 }}
                            source={require("../assets/gpay.png")}
                        />

                        <Text style={[styles.blackBoldText, { fontSize: 12 }]}> PAY USING</Text>

                        <Image
                            style={{ marginStart: 10, marginTop: 7 }}
                            source={require("../assets/arrow.png")}
                        />
                    </View>
                    <Text style={[styles.blackBoldText, { fontSize: 12}]}> Google Pay</Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: "#562D80", width: 150, borderRadius: 10, flexDirection: "row", justifyContent: "space-between"}}
                    onPress={() => { navigation.navigate('ScreenFour') }}>
                    <View>
                        <Text style={[styles.whiteText,{marginTop:5}]}>
                            Select an
                        </Text>
                        <Text style={{ color: "#ffffff", fontSize: 12, marginStart: 10, fontWeight: "bold" }}>
                            Address
                        </Text>
                    </View>
                    <Image
                        style={{ alignSelf:"center", marginEnd: 15 }}
                        source={require("../assets/right.png")}
                    />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    locationView: { flexDirection: "row", justifyContent: 'space-between' },
    historyView: { flexDirection: "row", justifyContent: 'space-between', marginTop: 10 },
    blackNormalText: { color: "#130A1C", fontSize: 12, fontFamily: 'Montserrat-Regular' },
    blueBoldText: { color: "#562D80", fontSize: 16, fontFamily: 'Montserrat-Bold' },
    blueSemiBoldText: { color: "#562D80", fontSize: 12, fontFamily: 'Montserrat-SemiBold', marginTop: 10 },
    subViewAmount: { flexDirection: "row", justifyContent: 'space-between', marginTop: 20 },
    blackBoldText: { color: "#130A1C", fontSize: 14, fontFamily: 'Montserrat-Bold' },
    couponView: { marginTop: 10, flexDirection: "row" },
    amountTotalView: { backgroundColor: "rgba(86, 45, 128, 0.1)", paddingHorizontal: 20, marginTop: 10, paddingVertical: 20 },
    whiteText: { color: "#ffffff", fontSize: 12, marginStart: 10, fontWeight: "bold" }

})


export default ScreenThreeComponent;
