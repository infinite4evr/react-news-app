import styled from 'styled-components';

const SpinnerContainer = styled.span`
  display: inline-block;
  position: relative;
  min-height: 1rem;
  max-width: 2rem;
  .progress-bar {
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
  }

  .circle {
    height: 100%;
    right: 0px;
    position: absolute;
    border: solid 3px var(--primary-color);
    border-top-color: white;
    border-radius: 50%;
  }

  .border {
    width: 100%;
    transform: rotate(135deg);
    animation: spin 1s steps(2) 0.2s infinite;
    -webkit-animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Spinner() {
  return (
    <SpinnerContainer>
      <div className='progress-bar'>
        <div className='circle border'></div>
      </div>
    </SpinnerContainer>
  );
}
