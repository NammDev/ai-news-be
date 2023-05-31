import { buildConfig } from 'payload/config'
import path from 'path'
import Categories from './collections/Categories'
import Posts from './collections/Posts'
import Tags from './collections/Tags'
import Users from './collections/Users'
import Media from './collections/Media'

export default buildConfig({
  // make sure to adjust
  // https://ai-news-be-production.up.railway.app
  serverURL: `https://ai-news-be-production.up.railway.app`,
  admin: {
    user: Users.slug,
  },
  collections: [Categories, Posts, Tags, Users, Media],
  // typescript: {
  //   outputFile: path.resolve(__dirname, 'payload-types.ts'),
  // },
  // graphQL: {
  //   schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  // },
})
