import { TouchableOpacity, Text, Image, View } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

export function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  lon,
  lat,
}) {
  const navigation = useNavigation()
  const processAddress = (address) => {
    const addArr = address.split(',');
    return addArr[0];
  }

  const streetAddress = processAddress(address);
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate('Restaurant', {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          shortDescription,
          dishes,
          lon,
          lat,
        })
      }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.3} size={22} />
          <View className="flex-row items-center space-x-1">
            <Text className="text-green-500">
              {rating}
            </Text>
            <Text className="text-xs text-gray-500">
              • {genre}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon size={22} color="#00CCBB" />
          <Text className="text-xs text-gray-500">Nearby • {streetAddress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}