import {
  IArticleQueryParamsErrors,
  IArticleRequestQueryParams,
} from 'types/ArticleTypes';

//can move to a validators file or somewhere else
export const validateArticleRequestData = (
  queryParams: IArticleRequestQueryParams
) => {
  const errors: IArticleQueryParamsErrors = {};
  if (queryParams.query.length === 0) {
    errors.query = 'Is required*';
  }

  if (new Date(queryParams.publishedFrom) > new Date()) {
    errors.publishedFrom = 'Invalid*';
  }

  if (new Date(queryParams.publishedTill) > new Date()) {
    errors.publishedTill = 'Invalid*';
  }

  if (
    new Date(queryParams.publishedTill) < new Date(queryParams.publishedFrom)
  ) {
    errors.publishedTill = 'Invalid*';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
