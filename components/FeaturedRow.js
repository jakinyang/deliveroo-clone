import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline"
import { RestaurantCard } from './RestaurantCard'

export function FeaturedRow({ title, description }) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-400 px-4">{description}</Text>
      <ScrollView 
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator="false"
        className="px-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard 
            id="1"
            imgUrl="https://links.papareact.com/gn7"
            title="Sushi"
            rating="5"
            genre="Japanese"
            address="555 Main St"
            shortDescription="Test Description"
            dishes={[]}
            long="90.000000"
            lat="90.000000"
        />
        <RestaurantCard 
            id="1"
            imgUrl="https://links.papareact.com/gn7"
            title="Sushi"
            rating="5"
            genre="Japanese"
            address="555 Main St"
            shortDescription="Test Description"
            dishes={[]}
            long="90.000000"
            lat="90.000000"
        />
        <RestaurantCard 
            id="1"
            imgUrl="https://links.papareact.com/gn7"
            title="Sushi"
            rating="5"
            genre="Japanese"
            address="555 Main St"
            shortDescription="Test Description"
            dishes={[]}
            long="90.000000"
            lat="90.000000"
        />
        <RestaurantCard 
            id="1"
            imgUrl="https://links.papareact.com/gn7"
            title="Sushi"
            rating="5"
            genre="Japanese"
            address="555 Main St"
            shortDescription="Test Description"
            dishes={[]}
            long="90.000000"
            lat="90.000000"
        />
      </ScrollView>
    </View>
  )
}