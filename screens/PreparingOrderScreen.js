import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';


export function PreparingOrderScreen() {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 4000)
  })

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
      <Progress.CircleSnail size={60} indeterminate={true} color="#00CCBB" />
    </SafeAreaView>
  )
}