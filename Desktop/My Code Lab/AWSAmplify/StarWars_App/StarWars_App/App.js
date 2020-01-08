import React, { Component } from 'react'
import { Text, View } from 'react-native'
import StarWarsPeopleContainer from './src/screens/StarWars/StarWarsScreen/StarWarsPeopleContainer'

export class App extends Component {
  render() {
    return (
      <View>
        <StarWarsPeopleContainer />
      </View>
    )
  }
}

export default App;
