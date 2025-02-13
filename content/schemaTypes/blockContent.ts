import {table} from '@sanity/table'
import {defineArrayMember, defineType} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    defineArrayMember({
      type: 'code',
      name: 'code',
      title: 'Code Blocks',
      options: {
        languageAlternatives: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'React', value: 'react'},
          {title: 'Node', value: 'node'},
          {title: 'MySQL', value: 'mysql'},
        ],
        withFilename: false,
      },
    }),
    defineArrayMember({type: 'table', ...table()}), // 👈 Aquí se usa la función table()
  ],
})
