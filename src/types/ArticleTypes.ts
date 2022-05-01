export interface Source {
  id: string;
  name: string;
}

export interface IArticle {
  source: Source;
  author: string;
  // there are some articles with title null as well on server
  title: string | null;
  description: string;
  url: string;
  urlToImage: string;
  // can add strongly-typed-date-string-typescript
  publishedAt: string;
  content: string;
}

export interface ArticleApiResponse {
  status: 'error' | 'ok';
  code?: string;
  message?: string;
  totalResults: number;
  articles: IArticle[];
  currPage: number;
}

export type ArticleFilterType = Readonly<
  Partial<{
    query: string;
    publishedFrom: string;
    publishedTill: string;
    sort: OrderValuesTypes;
  }>
>;

export enum OrderValuesTypes {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}

export interface IArticleRequestQueryParams {
  query: string;
  publishedFrom: string;
  publishedTill: string;
  sort: OrderValuesTypes;
}

export interface IArticleQueryParamsErrors
  extends Partial<IArticleRequestQueryParams> {
  message?: string;
}
