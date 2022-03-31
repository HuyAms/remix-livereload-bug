import type { LoaderFunction } from "remix"
import {useLoaderData } from "remix"
import groq from "groq"
import {client} from '~/utils/sanity.sever'

type LoadData = {
  pageData?: any
}

export const loader: LoaderFunction = async () => {

  // first attempt to reproduce the bug
  const query = groq`*[_type == "post" && slug.current in ['apache-kafka-explained', '/apache-kafka-explained']]`

  // second attempt, uncomment these below lines of code and comment the above one
  // const query = groq`*[_type == "post" && slug.current in $possibleSlugs]`
  // const queryParams = { possibleSlugs: ['apache-kafka-explained', '/apache-kafka-explained'] }

  const result = await client.fetch(query)

  const data: LoadData = {
      pageData: result,
  }

  return data
}

export default function Index() {

  const { pageData } = useLoaderData<LoadData>()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Try to update this text a few times? Does the hot reload work?</h1>
      <p>{JSON.stringify(pageData)}</p>
    </div>
  );
}
