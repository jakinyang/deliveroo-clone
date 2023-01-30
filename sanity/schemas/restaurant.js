import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'lon',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Address of the Restaurant',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating between 1-5',
      type: 'number',
      validation: (Rule) => Rule.required()
        .min(1)
        .max(5)
        .error("Please enter a value between 1 and 5")
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: "category"}]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: "reference", to: [{type: "dish"}]}]
    }),
  ],

  preview: {
    select: {
      title: 'name',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
