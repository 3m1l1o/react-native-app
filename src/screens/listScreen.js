import React from 'react';
import { Text, FlatList, StyleSheet} from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: "friend #1", age: 34 },
        { name: "friend #2", age: 34 },
        { name: "friend #3", age: 34 },
        { name: "friend #4", age: 34 },
        { name: "friend #5", age: 34 },
        { name: "friend #6", age: 34 },
        { name: "friend #7", age: 34 },
        { name: "friend #8", age: 34 },
        { name: "friend #9", age: 34 },
          
    ]

  return <FlatList 
              keyExtractor={  friend => friend.name }              
              data={ friends } 
              renderItem={ ({item} ) =>{ 
                return <Text style = { style.TextStyle }>{ item.name } - Age { item.age } </Text>
              } }/>
};

const style= StyleSheet.create({
  TextStyle:{
    marginVertical: 45
  }
});

export default ListScreen;