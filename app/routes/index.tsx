import type { LoaderFunction } from "remix"
import {useLoaderData } from "remix"
import groq from "groq"
//import {client} from '~/utils/sanity.sever'
import { getClient } from "~/utils/getClient";

type LoadData = {
  pageData?: any
}

export const loader: LoaderFunction = async () => {

  // first attempt to reproduce the bug
  //const query = groq`*[_type == "post" && slug.current in ['apache-kafka-explained', '/apache-kafka-explained']]`

  // second attempt, uncomment these below lines of code and comment the above one
  // const query = groq`*[_type == "post" && slug.current in $possibleSlugs]`
  // const queryParams = { possibleSlugs: ['apache-kafka-explained', '/apache-kafka-explained'] }

  //https://sczeoy4w.api.sanity.io/v2021-06-07/data/query/production?query=*[_type%20==%20%22post%22]{%20slug%20}
  const query = groq`*[_type == "post"]{ slug }`

  //Work with picosanity
  const result = await getClient().fetch(query)
  //Does not work with @sanity/client
  //const result = await client.fetch(query)

  const data: LoadData = {
      pageData: result,
  }

  return data
}

export default function Index() {

  const { pageData } = useLoaderData<LoadData>()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Update 4.4.2022. Does it live reload? Try a few time and see if it breaks</h1>
      <p>{JSON.stringify(pageData)}</p>
      {pageData?.length > 1
        ? pageData.map((page: any, index: number) => (
            <p key={index}>
              {page.slug.current}
            </p>
          ))
        : null}
    </div>
  );
}
