import { Article } from './../payload-types'
import { buildConfig } from 'payload/config'
import path from 'path'
import Categories from './collections/Categories'
import Tags from './collections/Tags'
import Users from './collections/Users'
import Media from './collections/Media'
import Articles from './collections/Articles'
import Authors from './collections/Authors'
import seo from '@payloadcms/plugin-seo'

export default buildConfig({
  // make sure to adjust
  // serverURL: `https://ai-news-be-production.up.railway.app`,
  serverURL: `http://localhost:8000`,
  collections: [Articles, Authors, Categories, Tags, Users, Media],
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, 'stylesheet.scss'),
  },
  // typescript: {
  //   outputFile: path.resolve(__dirname, 'payload-types.ts'),
  // },
  // graphQL: {
  //   schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  // },
  plugins: [
    seo({
      collections: ['articles'],
      uploadsCollection: 'media',
      tabbedUI: true,
      generateTitle: ({ doc }) => `${doc.}`,
    }),
  ],
})
