import React,{ useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const INCREMENT_NUMBER = 15;

const SquareScreen = () => {
  const [ red, setRed ] = useState(0);
  const [ blue, setBlue ] = useState(0);
  const [ green, setGreen ] = useState(0);
  console.log( red )
   
    return (
      <View>
        <ColorCounter 
        onIncrease={()=> setRed ( red + INCREMENT_NUMBER )}
        onDecrease={()=> setRed ( red - INCREMENT_NUMBER )}
        color="Red" />
        <ColorCounter
         onIncrease={()=> setBlue ( blue + INCREMENT_NUMBER )}
         onDecrease={()=> setBlue ( blue - INCREMENT_NUMBER )}
        color="Blue" />
        <ColorCounter 
         onIncrease={()=> setGreen ( green + INCREMENT_NUMBER )}
         onDecrease={()=> setGreen ( green - INCREMENT_NUMBER )}
        color="Green" />
      </View>
    );
  };
const styles = StyleSheet.create({});
export default SquareScreen;