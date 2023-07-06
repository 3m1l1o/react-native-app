import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetails from '../components/imageDetails'

const ImageScreen = ()=>{
    return (<View>
              <ImageDetails 
              title='Forest' 
              imageSource={ require("../../assets/forest.jpg")}
              score={10}/>
              <ImageDetails 
              title='Beach'
              imageSource={ require('../../assets/beach.jpg')}
              score={7}/>
              <ImageDetails title='mountain'
              imageSource={ require('../../assets/mountain.jpg')}
              score={4}/>
           </View>
    );
};
const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45 
    },
}); 
export default ImageScreen;