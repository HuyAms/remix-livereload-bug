import sanityClient from "@sanity/client"
import { sanityConfig } from "./sanityConfig"

const client = sanityClient({
    ...sanityConfig,
    useCdn: process.env.NODE_ENV === "production",
})

export { client }
