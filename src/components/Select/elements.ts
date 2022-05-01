import styled from 'styled-components';

export const SelectContainer = styled.span`
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
    width: 100%;
  }
  select {
    border: 1px solid #d9d9d9;
    border-radius: 0.4rem;
    box-sizing: border-box;
    padding: 1.5rem;
    margin: 1rem 0rem;
    width: 100%;

    font-size: 1.6rem;
    :focus {
      outline: none !important;
      border: 0.1rem solid var(--primary-color);
    }
  }

  option {
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 0.2rem 0.1rem;
  }
`;
