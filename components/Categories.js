import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { CategoryCard } from './CategoryCard'

export function Categories() {
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
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TESTING 1"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TESTING 2"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TESTING 3"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TESTING 4"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TESTING 5"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="TESTING 6"/>
    </ScrollView>
  )
}