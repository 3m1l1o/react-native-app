import react from "react";
import { Text, StyleSheet, View} from 'react-native';

const componentsScreen = ()=>{
    const name = 'Emilio';
    return (
        <View>
            <Text style= {styles.textStyle}>whit React Native</Text>
            <Text style= {styles.subTitleStyle}>My name is { name }</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45 
    },
    subTitleStyle:{
        fontSize: 40 
    }

});
export default componentsScreen;