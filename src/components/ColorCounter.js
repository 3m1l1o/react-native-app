import React from "react";
import { View, Button, StyleSheet,Text } from "react-native";

const ColorCounter = ( { color }) => {
    console.log('hello world')
    return
    <View>
        <Text>{ color }</Text>
        <Button title= {`Increase ${color}`} />
        <Button title= {`Decrease ${color}`}/>
    </View>

}
const styles = StyleSheet.create({});

export default ColorCounter;