import React, { useState } from "react";
import { Text, Button, StyleSheet, View } from "react-native";

<<<<<<< HEAD
const CounterScreen = ()=>{
    console.log('commit')
    const [ counter, setCounter]= useState(0);
    return
        <View>
            <Button 
            title="Increase Numbre"
            onPress={()=>{
            setCounter( counter + 1)
            }}/>
            <Button 
            title="Dicrease Numbre"
            onPress={()=>{
            setCounter( counter - 1)
            }}/>
            <Text> Counter Numbre : { counter }</Text>
        </ View>
    
=======
const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const counterHandler = (amount) => {
    if ((counter <= 0 && amount < 0) || (counter >= 9 && amount > 0)) return;

    setCounter(counter + amount);
  };

  return (
    <View>
      <Button
        title="Increase Number"
        onPress={() => counterHandler(1)}
      />
      <Button
        title="Dicrease Number"
        onPress={() => counterHandler(-1)}
      />
      <Text> Counter Numbre : {counter}</Text>
    </View>
  );
>>>>>>> ba523021b5514f09c1955b1e35e80e803255993d
};

const styles = StyleSheet.create({});

export default CounterScreen;