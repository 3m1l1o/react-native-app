import React,{useState} from 'react';
import { Text, Button, StyleSheet, View} from 'react-native';

const CounterScreen = ()=>{
    const [ counter, setCounter]= useState(rgbRandom());
    return(
        <View>
            <Button 
            title="Increase Number"
            onPress={()=>{
            setCounter( counter + 1)
            }}/>
            <Button 
            title="Dicrease Number"
            onPress={()=>{
            setCounter( counter - 1)
            }}/>
            <Text> Counter Numbre : { counter }</Text>
        </ View>
    
)};
const styles=  StyleSheet.create({});
export default CounterScreen;
