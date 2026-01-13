import {
  arrayValidation,
  optionalValidation,
  stringValidation,
  urlValidation,
  createSchema,
} from './schema-helpers';

export const blogPostSchema = {
  title: stringValidation('Title'),
  content: stringValidation('Content'),
  mainImage: optionalValidation(stringValidation('Main Image')),
  category: stringValidation('Category'),
  tags: optionalValidation(arrayValidation('Tags')),
  meta: createSchema({
    description: optionalValidation(stringValidation('Meta Description')),
    keywords: optionalValidation(stringValidation('Meta Keywords')),
    canonical: optionalValidation(urlValidation('Canonical')),
  }),
  status: stringValidation('Status'),
};

export const searchSchema = {
  term: stringValidation('Search Term'),
};

export const blogCommentSchema = {
  author: stringValidation('Author'),
  content: stringValidation('Content'),
};
