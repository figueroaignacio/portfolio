import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'locale',
      title: 'Locale',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Español', value: 'es'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'liveSite',
      title: 'Live Site',
      type: 'url',
      description: 'Link to the live version of the project.',
    }),
    defineField({
      name: 'sourceCode',
      title: 'Source Code',
      type: 'url',
      description: 'Link to the source code repository.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      locale: 'locale',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, locale, media} = selection
      return {
        title: `${title} (${locale})`,
        media,
      }
    },
  },
})
