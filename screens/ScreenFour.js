import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet , Image,TouchableOpacity,PermissionsAndroid,
  Platform,} from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenFourComponent from '../components/ScreenFourComponent';
import Geolocation from '@react-native-community/geolocation';

const ScreenFour = ({ navigation }) => {
 

  return (
    <SafeAreaView
    style={{
      flex: 1,
    }}
  > 
    <MapView
    style={{flex: 1,}}
    initialRegion={{
      latitude: 22.719568,
      longitude: 75.857727,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
   
      
     <Marker
  coordinate={{ latitude : 22.719568 , longitude : 75.857727 }}
/>

    </MapView> 
    <TouchableOpacity
          onPress={()=>{navigation.goBack();}}
          style={{position: 'absolute'}}> 
    <Image
        style={{ marginStart: 20, marginTop:10}}
        source={require("../assets/back.png")}
      />
      </TouchableOpacity>
  <ScreenFourComponent
        navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


});
export default ScreenFour;
