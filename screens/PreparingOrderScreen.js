import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

export function PreparingOrderScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF] justify-center items-center">
      <Animatable.Image 
        source={require('../assets/alegria-city.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
    </SafeAreaView>
  )
}