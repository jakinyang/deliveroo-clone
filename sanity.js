import SanityClientConstructor from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = SanityClientConstructor({
  projectId: "f48fo2rz",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21"
})

const builder = ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);