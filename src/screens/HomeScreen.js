import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="go to the component Demo" />
      <Button
        onPress={() => navigation.navigate('List')}
        title="go to the List component Demo" />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('Image')}
        title="go to image Demo" />
      <TouchableOpacity onPress={() => navigation.navigate('Image')}></TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="go to Counter Demo" />
      <TouchableOpacity onPress={() => navigation.navigate('Counter')}></TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('Color')}
        title="go to Color Demo" />
      <TouchableOpacity onPress={() => navigation.navigate('Color')}></TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('Square')}
        title="go to Square Demo" />
      <TouchableOpacity onPress={() => navigation.navigate('Square')}></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

