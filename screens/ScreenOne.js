import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet, Dimension, Modal, Image ,TouchableOpacity,Text} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenOneComponent from '../components/ScreenOneComponent';
import ScreenThreeComponent from '../components/ScreenThreeComponent';
import ScreentwoComponent from '../components/ScreentwoComponent';

const ScreenOne = ({ navigation }) => {
  const [visibleOne, setVisibleOne] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);
  const [visibleThree, setVisibleThree] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#C2C2C2",
        justifyContent: "flex-end"
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleOne}
        style={{bottom: 0}}
        
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end"
          }}>
        <TouchableOpacity
          onPress={()=>{  setVisibleOne(false);
            setVisibleTwo(false);
            setVisibleThree(false);}}> 
        <Image
        style={{ alignSelf: "center", marginBottom:20 }}
        source={require("../assets/blackCross.png")}
      />
      </TouchableOpacity>     
      <ScreenOneComponent
        onPress={()=>{
          console.log("hello");
          setVisibleOne(false);
          setVisibleTwo(true)}} />
        </View>
      
        </Modal>


        <Modal
        animationType="slide"
        transparent={true}
        visible={visibleTwo}
        style={{bottom: 0}}
        
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end"
          }}>
        <TouchableOpacity
          onPress={()=>{  setVisibleOne(false);
            setVisibleTwo(false);
            setVisibleThree(false);}}> 
        <Image
        style={{ alignSelf: "center", marginBottom:20 }}
        source={require("../assets/blackCross.png")}
      />
      </TouchableOpacity>     
      <ScreentwoComponent
        onPress={()=>{
          setVisibleOne(false);
          setVisibleTwo(false);
          setVisibleThree(true);}} />
        </View>
      
        </Modal>

        <Modal
        animationType="slide"
        transparent={true}
        visible={visibleThree}
        style={{bottom: 0}}
        
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end"
          }}>
        <TouchableOpacity
          onPress={()=>{  setVisibleOne(false);
            setVisibleTwo(false);
            setVisibleThree(false);}}> 
        <Image
        style={{ alignSelf: "center", marginBottom:20 }}
        source={require("../assets/blackCross.png")}
      />
      </TouchableOpacity>     
      <ScreenThreeComponent
       navigation = {navigation} />
        </View>
      
        </Modal>

        <TouchableOpacity style={{ backgroundColor: "#562D80", width: '90%',height:40, borderRadius: 10, alignSelf:'center' , marginBottom:10}}
          onPress={()=>{setVisibleOne(true)}}>
          
              <Text style={styles.whiteText}>
               Open PopUp
              </Text>
              
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  whiteText:{ color: "#ffffff", fontSize: 14, alignSelf:'center',marginTop:10, fontWeight: "bold" }
});
export default ScreenOne;
