import { RollInLeft } from "react-native-reanimated";
import React, { useState } from react;
import { Text, Button, StyleSheet, View} from react-Native;
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";

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
    
};
