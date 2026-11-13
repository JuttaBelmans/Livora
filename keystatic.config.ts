import { config, fields, collection } from '@keystatic/core';

const isProduction = process.env.NODE_ENV === 'production';

export default config({
  storage: isProduction
    ? {
        kind: 'github',
        repo: { owner: 'JuttaBelmans', name: 'Livora' },
      }
    : { kind: 'local' },
  collections: {
    artikelen: collection({
      label: 'Artikelen',
      slugField: 'title',
      path: 'src/content/artikelen/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titel' } }),
        category: fields.select({
          label: 'Rubriek',
          options: [
            { label: 'Lifestyle', value: 'Lifestyle' },
            { label: 'Mode', value: 'Mode' },
            { label: 'Beauty', value: 'Beauty' },
          ],
          defaultValue: 'Lifestyle',
        }),
        excerpt: fields.text({ label: 'Korte intro', multiline: true }),
        imageUrl: fields.url({ label: 'Link naar omslagfoto' }),
        imageAlt: fields.text({ label: 'Beschrijving van de foto' }),
        publishedAt: fields.date({ label: 'Publicatiedatum' }),
        featured: fields.checkbox({ label: 'Uitlichten op de homepage' }),
        fictional: fields.checkbox({ label: 'Fictief voorbeeldartikel', defaultValue: false }),
        content: fields.markdoc({ label: 'Artikeltekst' }),
      },
    }),
  },
});
