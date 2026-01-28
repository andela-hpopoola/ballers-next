import {
  arrayValidation,
  optionalValidation,
  stringValidation,
  urlValidation,
  createSchema,
} from './schema-helpers';

export const blogPostSchema = {
  title: stringValidation('Title'),
  slug: stringValidation('Slug'),
  content: stringValidation('Content'),
  mainImage: optionalValidation(stringValidation('Main Image')),
  category: stringValidation('Category'),
  tags: optionalValidation(arrayValidation('Tags')),
  meta: createSchema({
    description: optionalValidation(stringValidation('Meta Description')),
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
