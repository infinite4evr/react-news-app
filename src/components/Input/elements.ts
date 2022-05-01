import styled from 'styled-components';

export const InputContainer = styled.span`
  margin-right: 1.6rem;

  label {
    color: #3d3d3d;
    display: inline-block;
    margin-bottom: 0.5rem;
    width: 100%;

    em {
      display: inline-block;
      color: var(--primary-warn);
      margin-left: 1.1rem;
    }
    input {
      border: 1px solid #d9d9d9;
      border-radius: 0.4rem;
      font-size: 1.6rem;
      box-sizing: border-box;
      padding: 1.5rem;
      margin: 1rem 0rem;
      width: 100%;
      font-family: inherit;

      :focus {
        outline: none !important;
        border: 0.1rem solid var(--primary-color);
      }
    }
  }
`;
