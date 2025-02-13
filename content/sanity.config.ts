import {codeInput} from '@sanity/code-input'
import {table} from '@sanity/table'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'notes',

  projectId: '2rus8ssl',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput(), table()],

  schema: {
    types: schemaTypes,
  },
})
