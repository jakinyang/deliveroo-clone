import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import Currency from 'react-currency-formatter'
import { selectRestaurant } from '../features/restaurantSlice'
import { selectBasketItems, removeFromBasket, selectBasketTotal } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'

export function BasketScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal)
  const [groupedBasketItems, setGroupedBasketItems] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results
    }, {})
    setGroupedBasketItems(groupedItems)
  }, [items])

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   })
  // }, [])
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>

          <TouchableOpacity
            className="rounded-full bg-gray-100 absolute top-3 right-5 z-50"
            onPress={() => navigation.goBack()}
          >
            <XCircleIcon
              color="#00CCBB"
              size={50}
            />
          </TouchableOpacity>

        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className="h-10 w-10 bg-gray-300 p4 rounded-full"
          />
          <Text
            className="flex-1"
          >
            Deliver in 50-75 min
          </Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">
              Change
            </Text>
          </TouchableOpacity>

        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedBasketItems).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">
                {items.length} x
              </Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url()
                }}
                className="h-12 w-12 bg-gray-300 p4 rounded-full"
              />
              <Text className="flex-1">
                {items[0]?.name}
              </Text>
              <Text>
                <Currency
                  quantity={items[0]?.price}
                  currency="CAD"
                />
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency
                quantity={basketTotal}
                currency="CAD"
              />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency
                quantity={basketTotal * 0.1}
                currency="CAD"
              />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text >Delivery Fee</Text>
            <Text className="font-extrabold">
              <Currency
                quantity={basketTotal * 1.1}
                currency="CAD"
              />
            </Text>
          </View>
          <TouchableOpacity
            className="rounded-lg bg-[#00CCBB] p-4"
            onPress={() => navigation.navigate('PreparingOrder')}
          >
            <Text className="text-center text-white text-lg font-bold">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}