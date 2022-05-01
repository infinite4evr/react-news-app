import React from 'react';
import { IArticle } from 'types/ArticleTypes';
import {
  ArticleCard,
  ArticleContainer,
  ArticleContentContainer,
  ArticleDescription,
  ArticleHeader,
  ArticleImage,
  ArticleSource,
} from './elements';

const sliceText = (text: string, size: number) =>
  text.length > size ? text.slice(0, size) + '...' : text;

type ArticleProps = {
  article: IArticle;
};

const Article = React.forwardRef<HTMLDivElement, ArticleProps>(
  ({ article }, ref) => {
    const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <ArticleContainer ref={ref}>
        <a
          href={article.url}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <ArticleCard>
            <ArticleImage>
              <img
                loading='lazy'
                src={article.urlToImage}
                alt={(article.title || '') + ' image'}
              />
            </ArticleImage>
            <ArticleContentContainer>
              <ArticleHeader>
                {article.title && sliceText(article.title, 100)}
              </ArticleHeader>

              <ArticleDescription>
                {sliceText(article.description, 250)}
              </ArticleDescription>
              <footer>
                <em>{date}</em>
                <ArticleSource>#{article.source.name}</ArticleSource>
              </footer>
            </ArticleContentContainer>
          </ArticleCard>
        </a>
      </ArticleContainer>
    );
  }
);

export default Article;
