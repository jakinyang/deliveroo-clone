import sanityClient from '@sanity/client'
import imageUrlBuilder from "@sanity/imageUrlBuilder"
import { BuildingStorefrontIcon } from 'react-native-heroicons/outline';

const client = sanityClient({
  projectId: "f48fo2rz",
  dataset: "proeduction",
  useCdn: true,
  apiVersion: "2023-01-30",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  builder.image(source);
}

export default client;