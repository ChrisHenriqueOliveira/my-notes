import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  margin: 48px auto;

  width: 100%;
  max-width: 1280px;
  padding: 16px;

  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

  animation: ${appearFromTop} 1s;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1 {
      display: flex;
      font: 32px Roboto, sans-serif;
      font-weight: 700;
      color: #000;
    }

    button {
      max-width: 180px;
      margin: 0;
    }
  }

  @media only screen and (max-width: 730px) {
    .header {
      flex-direction: column;

      button {
        max-width: 100%;
        margin-top: 8px;
      }
    }
  }
`;

export const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  flex-direction: column;
  margin-top: 16px;

  @media only screen and (max-width: 1160px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 730px) {
    grid-template-columns: 1fr;
  }
`;
