import styled from 'styled-components';
// import { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  padding: 2rem 20rem;

  @media screen and (max-width: 1040px) {
    flex-wrap: wrap;
    padding: 10rem 15rem;
  }

  @media screen and (max-width: 768px) {
    padding: 10rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 3rem;

  @media screen and (max-width: 1040px) {
    order: 2;
    margin-top: 3rem;
    padding-right: 0;
  }
`;

export const LineAndText = styled.div`
  position: relative;
`;

export const Line = styled.div`
  position: absolute;
  content: '';
  left: -3rem;
  top: 2.5rem;
  width: 3px;
  height: 20rem;
  background-color: #e00037;

  @media screen and (max-width: 520px) {
    display: none;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1040px) {
    justify-content: center;
    align-items: center;
  }
`;

export const WebdotsAndWorks = styled.div`
  display: flex;
`;

export const Webdots = styled.h1`
  align-self: flex-start;
  justify-self: flex-start;
  font-size: 8rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 7rem;
  }

  @media screen and (max-width: 520px) {
    font-size: 6rem;
  }
`;

// const circle = keyframes`
//   0% {
//     transform: scale(1);
//   }

//   50% {
//     transform: scale(1.07);
//   }

//   100% {
//     transform: scale(1);
//   }
// `;

// export const HomeWorks = styled(Link)`
//   border-radius: 50%;
//   border: 2px solid #e00037;
//   width: 9rem;
//   height: 9rem;
//   font-weight: 700;
//   font-size: 1.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   align-self: center;
//   margin-left: 4rem;
//   color: #e00037;
//   text-decoration: none;
//   text-align: center;
//   animation: 2s ${circle} infinite;

//   @media screen and (max-width: 1040px) {
//     display: none;
//   }
// `;

export const DigitalAgency = styled.h2`
  font-size: 4.5rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: -2.5rem;

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    margin-top: -2rem;
  }

  @media screen and (max-width: 520px) {
    font-size: 3rem;
    margin-top: -1rem;
  }
`;

export const Description = styled.p`
  font-size: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 1040px) {
    text-align: center;
  }

  @media screen and (max-width: 520px) {
    font-size: 1.8rem;
  }
`;

export const HomeLinks = styled.div`
  font-size: 2rem;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 5rem;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1040px) {
    order: 1;
    padding-right: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 45rem;
  height: 45rem;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 40rem;
    height: 40rem;
  }

  @media screen and (max-width: 520px) {
    width: 35rem;
    height: 35rem;
  }

  @media screen and (max-width: 440px) {
    width: 27.5rem;
    height: 27.5rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
