import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemas } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Imperium Bail Bonds',
  projectId: 'n54hpimx',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemas,
  },
})
