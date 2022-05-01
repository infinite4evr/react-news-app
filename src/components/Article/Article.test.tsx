import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import Article from './Article';
import faker from '@faker-js/faker';
import { IArticle } from 'types/ArticleTypes';

describe('Testing Article Component', () => {
  const article: IArticle = {
    author: faker.name.findName(),
    content: faker.random.words(),
    description: faker.lorem.paragraph(),
    publishedAt: faker.date.past(10) as unknown as string,
    source: {
      id: faker.random.alphaNumeric(),
      name: faker.name.findName(),
    },
    url: faker.internet.domainName(),
    title: faker.name.findName(),
    urlToImage: faker.image.cats(),
  };

  // see if the form is visible
  test('Component renders successfully', () => {
    render(<Article article={article} />);

    expect(screen.findByText(article.author)).toBeDefined();
    expect(screen.findByText(article.source.name)).toBeDefined();
  });
});
