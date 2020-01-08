import React from 'react'
import _ from 'lodash'
import { View, Text, TouchableOpacity, Button, StyleSheet, FlatList, ActivityIndicator } from 'react-native'

const RenderStarWarsList = props => {
  const { starWarsPeople, onPressFetch, isRequesting, fetchStarShips } = props;

  if(!!starWarsPeople){
    return (
      <View>
      <TouchableOpacity>
         <Button
          title='Load Star Wars People List'
          onPress={ onPressFetch }
        />
       </TouchableOpacity>
       
      <FlatList
        data={props.starWarsPeople}
        renderItem={({ item }) => {
          return ( 
            <View style={styles.item}>
            <Text>{`Name: ${item.name}`}</Text>
            <Text>{`DOB: ${item.birth_year}`}</Text>
            <Text>{`Home World at: ${item.homeworld}`}</Text>
            <Text>{`Date created: ${item.gender}`}</Text>
            </View>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <TouchableOpacity>
         <Button
          title='Load Star Ships'
          onPress={ fetchStarShips }
        />
      </TouchableOpacity> */}
      </View>
  )
  } else if(isRequesting){
    return <ActivityIndicator size="large" color="#0000ff" />
  } else {
    return;
  }
}


export const StarWarsPeople = props => {

  const { starWarsPeople, onPressFetch, isRequesting, fetchStarShips } = props;
  console.log('starWars', starWarsPeople);

  return (
       <View style={ styles.container } >
       
          <RenderStarWarsList
            starWarsPeople={starWarsPeople}
            isRequesting={isRequesting}
            onPressFetch={onPressFetch}
            fetchStarShips={fetchStarShips}
        />
      
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
   paddingTop: 100,
   justifyContent: 'center', 
  },
  item: {
    marginHorizontal: 30,
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
});
