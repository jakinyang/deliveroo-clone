import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline"
import { RestaurantCard } from './RestaurantCard'
import { client } from '../sanity'

export function FeaturedRow({ id, title, description }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client.fetch(
      `*[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type-> {
            name
          }
        }
      }[0]`,
      { id }
    )
      .then(data => {
        setRestaurants(data?.restaurants)
      })
      .catch(err => console.error(err))
    }, [])
    
    console.log(restaurants)
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-400 px-4 mb-2">{description}</Text>
      <ScrollView 
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator="false"
        className="px-4"
      >
        {/* Restaurant Cards */}
        {restaurants?.map(restaurant => {
          return(
            <RestaurantCard 
                key={restaurant._id}
                id={restaurant._id}
                imgUrl={restaurant.image}
                title={restaurant.name}
                rating={restaurant.rating}
                genre={restaurant.type?.name}
                address={restaurant.address}
                shortDescription={restaurant.shortDescription}
                dishes={restaurant.dishes}
                lon={restaurant.lon}
                lat={restaurant.lat}
            />
          )
        })}
        
      </ScrollView>
    </View>
  )
}