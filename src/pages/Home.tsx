import axios from 'axios';
import { apiEndpoints } from '../constants/api-constants';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  ArticleApiResponse,
  IArticleQueryParamsErrors,
  OrderValuesTypes,
} from 'types/ArticleTypes';
import Input from 'components/Input/Input';
import { api, isNewsApiError, PAGE_SIZE } from 'helpers/api';
import Select from 'components/Select/Select';
import Spinner from 'components/Spinner';
import Article from 'components/Article/Article';
import { Error, ArticlesContainer, Container, QueryForm } from './elements';
import { Button } from 'components/Button/Button';
import { useSearchParams } from 'react-router-dom';
import { validateArticleRequestData } from 'utils/validators';

const App = function App() {
  const [params, setParams] = useSearchParams();
  // we need to get data from params if someone loaded a url directly
  const [formState, setFormState] = useState({
    query: params.get('query') || '',
    publishedFrom: params.get('publishedFrom') || '',
    publishedTill: params.get('publishedTill') || '',
    // needs a check here
    sort:
      (params.get('sort') as OrderValuesTypes) || OrderValuesTypes.popularity,
  });

  const [page, setPage] = useState<number>(0);
  const [errors, setErrors] = useState<IArticleQueryParamsErrors>({});
  const [loading, setLoading] = useState(false);
  const [lastArticleRef, lastArticleInView] = useInView();

  const [articlesData, setArticlesData] = useState<ArticleApiResponse | null>(
    null
  );

  const fetchNews = React.useCallback(async () => {
    const { valid, errors: formErrors } = validateArticleRequestData(formState);

    if (!valid) {
      return setErrors(formErrors);
    } else {
      setErrors({});
    }

    const params = { ...formState };
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    //@ts-ignore
    Object.keys(params).forEach(k => params[k] == '' && delete params[k]);

    setParams(params);

    try {
      setLoading(true);
      // we should make it a standalone api function in a diff file
      // here for sake for brevity
      // can use react-query lib for caching, pagination
      const reqResult = await api.get<ArticleApiResponse>(
        apiEndpoints.NEWS_API_URL,
        {
          params: {
            ...params,
            page,
          },
        }
      );

      if (page !== 1) {
        setArticlesData((articlePrev: ArticleApiResponse | null) => {
          if (articlePrev) {
            return {
              ...articlePrev,
              articles: [...articlePrev?.articles, ...reqResult.data.articles],
            };
          }

          return { ...reqResult.data };
        });

        return;
      }

      setArticlesData({ ...reqResult.data });
    } catch (err) {
      if (axios.isAxiosError(err) && isNewsApiError(err.response?.data)) {
        setErrors({ message: err.response?.data.msg });

        return;
      }

      setErrors({ message: 'Some  Error Occurred' });
    } finally {
      setLoading(false);
    }
  }, [page, setParams, formState]);

  const submitHandler = () => {
    if (page !== 1) {
      setPage(1);

      return;
    }
    void fetchNews();
  };

  const maxDate = React.useMemo(
    () => new Date().toISOString().split('T')[0],
    []
  );

  // if there are params then we directly load articles on page load
  useEffect(() => {
    if (params.get('query') && page === 0) {
      setPage(1);
    }
  }, [page, params]);

  useEffect(() => {
    if (page > 0) {
      void fetchNews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // if last article is now on view then trigger a page increase
  useEffect(() => {
    if (lastArticleInView) {
      setPage(page => page + 1);
    }
  }, [lastArticleInView]);

  const articles = articlesData?.articles;

  // can use debounce for handling input changes
  // or can use on blur instead of onchange
  return (
    <Container>
      <QueryForm>
        <div className='input-container'>
          <Input
            label='Search'
            name='query'
            type='text'
            placeholder='Keywords'
            required
            value={formState.query}
            onChange={e =>
              setFormState({ ...formState, query: e.target.value })
            }
            error={errors.query}
          />
          <Input
            label='From'
            name='published-from'
            type='date'
            value={formState.publishedFrom}
            max={maxDate}
            error={errors.publishedFrom}
            onChange={e =>
              setFormState({ ...formState, publishedFrom: e.target.value })
            }
          />
          <Input
            label='To'
            name='published-till'
            type='date'
            value={formState.publishedTill}
            min={formState.publishedFrom}
            max={maxDate}
            error={errors.publishedTill}
            onChange={e =>
              setFormState({ ...formState, publishedTill: e.target.value })
            }
          />

          <Select
            label='Sort'
            value={formState.sort}
            required
            onChange={e =>
              setFormState({
                ...formState,
                sort: e.target.value as OrderValuesTypes,
              })
            }
          >
            <option value={OrderValuesTypes.popularity}>Popularity</option>
            <option value={OrderValuesTypes.relevancy}>Relevance</option>
            <option value={OrderValuesTypes.publishedAt}>Published at</option>
          </Select>
        </div>

        <Button onClick={submitHandler}>
          {loading ? <Spinner /> : 'Submit'}
        </Button>
      </QueryForm>
      {errors.message && <Error>{errors.message}</Error>}
      {articlesData && <em>Total Results: {articlesData?.totalResults}</em>}
      <ArticlesContainer>
        {articles &&
          articles.map((article, index) =>
            index === articlesData.articles.length - 1 &&
            !loading &&
            page * PAGE_SIZE < articlesData.totalResults ? (
              <Article
                article={article}
                key={`${article.url}-${index}`}
                ref={lastArticleRef}
              />
            ) : (
              <Article article={article} key={`${article.url}-${index}`} />
            )
          )}
        {!loading && articles && articles.length >= articlesData?.totalResults && (
          <Container>
            <span style={{ textAlign: 'center', fontSize: '2.5rem' }}>
              {articles.length === 0
                ? 'No Articles Found'
                : '❤ All Results loaded ❤'}
            </span>
          </Container>
        )}
      </ArticlesContainer>
      {loading && (
        <div className='article-loader'>
          <Spinner />
        </div>
      )}
    </Container>
  );
};

export default App;
