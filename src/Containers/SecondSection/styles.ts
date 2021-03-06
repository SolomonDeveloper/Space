import styled from "styled-components";

export const Container = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;
  position: relative;
  
  .planet1 {
    width: 60%;
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(-180deg);
    overflow: hidden;
    z-index: -999;
  }
`;

export const TitleContainer = styled.div`
  width: 50%;
  h1 {
    margin-bottom: 1rem;
    + h1 {
      margin-left: 1.3rem;
    }
  }

  @media screen and (max-width: 520px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      width: 100%;
      text-align: center;
      font-size: 4rem;
    }
  }
`;