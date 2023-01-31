import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CategoryCard } from './CategoryCard'
import { client, urlFor } from '../sanity';

export function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    client.fetch(
      `*[_type == "category"]`
    )
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  })
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      {categories?.map(category => {
        return (
          <CategoryCard
            key={category._id}
            imgUrl={category.image}
            title={category.name}
          />
        )
      })}
    </ScrollView>
  )
}