import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1.6rem;
  padding: 4rem;
  flex-direction: column;
  width: 80%;
  margin: 0rem auto;

  @media (max-width: 320px) {
    width: 100%;
    padding: 0.5rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 1rem;
  }

  .article-loader {
    text-align: center;
  }
`;

export const QueryForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .input-container {
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const ArticlesContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 400;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const Error = styled('em')`
  text-align: center;
  font-size: 3rem;
  color: var(--primary-warn);
`;
