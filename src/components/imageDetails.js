import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { clockRunning } from "react-native-reanimated";

const ImageDetails = ( { title, imageSource, score } ) =>{
    
    return (<View>
             <Image source={ imageSource }/>
             <Text>{ title }</Text>
             <Text> score - { score }
             </Text>
             </View> 
)};
const styles = StyleSheet.create({}); 
export default ImageDetails;