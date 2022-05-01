import {
  IArticleQueryParamsErrors,
  IArticleRequestQueryParams,
} from 'types/ArticleTypes';

//can move to a validators file or somewhere else
export const validateForm = (formState: IArticleRequestQueryParams) => {
  const errors: IArticleQueryParamsErrors = {};
  if (formState.query.length === 0) {
    errors.query = 'Is required*';
  }

  if (new Date(formState.publishedFrom) > new Date()) {
    errors.publishedFrom = 'Invalid*';
  }

  if (new Date(formState.publishedTill) > new Date()) {
    errors.publishedTill = 'Invalid*';
  }

  if (new Date(formState.publishedTill) < new Date(formState.publishedFrom)) {
    errors.publishedTill = 'Invalid*';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
