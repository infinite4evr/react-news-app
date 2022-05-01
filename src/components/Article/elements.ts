import styled from 'styled-components';

export const ArticleContainer = styled('article')`
  position: relative;
  background-color: #fff;
  border-radius: 0.4rem;
  min-width: 40rem;
  flex: 1 0 20%;
  margin-top: 3.2rem;
  height: 60rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    height: 50rem;
  }

  cursor: pointer;

  @media (max-width: 600px) {
    flex-direction: column;
    min-width: 30rem;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    min-width: 20rem;
  }

  /* @media (min-width: 600px) {
    min-width: 40rem;
  } */
  :hover {
    transition-duration: 0.4s;
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
  }

  footer {
    width: 90%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    bottom: 1.5rem;
  }
`;

export const ArticleHeader = styled('h3')`
  font-size: 2.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const ArticleDescription = styled('div')`
  color: #262626;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  height: 10rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ArticleCard = styled('div')``;

export const ArticleImage = styled.span`
  display: block;
  position: relative;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 25rem;
    object-fit: cover;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    :hover {
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -o-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

export const ArticleSource = styled('span')`
  display: block;
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
`;

export const ArticleContentContainer = styled.div`
  padding: 1.6rem;
`;
