import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/home'
import SearchScreen from '../screens/search'


const { Navigator, Screen } = createStackNavigator()

export default function Navigation (): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>

        <Screen name='Search' component={SearchScreen} options={{headerShown: false}}/>

     
      </Navigator>
    </NavigationContainer>
  )
}
