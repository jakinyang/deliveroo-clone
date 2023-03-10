import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, StarIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch } from 'react-redux'
import { DishRow } from '../components/DishRow';
import { BasketIcon } from '../components/BasketIcon';
import { BackButton } from '../components/BackButton';
import { setRestaurant } from '../features/restaurantSlice';

export function RestaurantScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const { params: {
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
  } } = useRoute();

  useEffect(() => {
    dispatch(setRestaurant({
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
    }))
  }, [dispatch])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  const processAddress = (address) => {
    const addArr = address.split(',');
    return addArr[0];
  }

  const streetAddress = processAddress(address);

  return (
    <>
      <BasketIcon

      />
      <BackButton navigation={navigation} />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url()
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" size={22} opacity={0.5} />
                <Text className="text-green-500">
                  {rating}
                </Text>
                <Text className="text-xs text-gray-500">
                  ??? {genre}
                </Text>
                <MapPinIcon size={22} color="#00CCBB" />
                <Text className="text-xs text-gray-500">Nearby ??? {streetAddress}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
          </TouchableOpacity>
          <View className="pb-36">
            <Text className="px-4 mb-3 pt-6 font-bold text-xl">
              Menu
            </Text>
            {dishes.map(dish => {
              return (
                <DishRow
                  key={dish._id}
                  id={dish._id}
                  name={dish.name}
                  description={dish.shortDescription}
                  price={dish.price}
                  image={dish.image}
                >

                </DishRow>
              )
            })}
          </View>
        </View>
      </ScrollView>
    </>
  )
}