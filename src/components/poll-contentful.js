import { createClient } from 'contentful'

const pollContentful = async (space, accessToken, id, publishedVersion) => {
const client = createClient({ space, accessToken })

const resp = await client.getEntries({
  'sys.id': id
})

const element = resp.items[0]
const cdnVersion = element.sys.revision

if (publishedVersion > cdnVersion) {
  return await pollContentful(id, publishedVersion)
} else {
  return element
}}

export default pollContentful