import React, { useState } from "react";
import { Text, Button, StyleSheet, View } from "react-native";

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
};

const styles = StyleSheet.create({});

export default CounterScreen;