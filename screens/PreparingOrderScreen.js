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
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-[#00CCBB] font-extrabold text-center"
      >
        Sending Order To Restaurant!
      </Animatable.Text>
    </SafeAreaView>
  )
}