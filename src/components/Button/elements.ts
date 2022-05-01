import styled from 'styled-components';

export const Button = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-transform: capitalize;
  width: 10rem;
  border-radius: 0.4rem;
  padding: 1.5rem;
  margin: 1.1rem 0 0 0;

  color: rgb(255, 255, 255);
  background-color: var(--primary-color);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover {
    text-decoration: none;
    background-color: var(--primary-color);
  }
`;
