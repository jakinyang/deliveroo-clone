import { TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import React from 'react'

export function BackButton({ navigation }) {
  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full z-50"
    >
      <ArrowLeftIcon size={20} color="#00CCBB" />
    </TouchableOpacity>
  )
}