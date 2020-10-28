import styled from 'styled-components';

const CapsuleButtonWrapper = styled.div`
  grid-area: capsule;
  display: flex;
  place-content: center;
  align-items: center;
`;

const CapsuleButton = styled.button`
  height: 40%;
  width: 86%;
  @media screen and (max-width: 768px) {
    height: 25%;
  }
`;

const RocketWrapper = styled.div`
  grid-area: rocket;
  display: flex;
  place-content: center;
`;

const LandingPad = styled.div`
  grid-area: landing;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LandingPadWrapper = styled.div`
  width: 86%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const LandingPadButton = styled.button`
  height: 40%;
  width: 42%;
  @media screen and (max-width: 768px) {
    height: 25%;
    width: 88%;
  }
`;

const LandingPadInput = styled.input`
  height: 35%;
  width: 48%;
  @media screen and (max-width: 768px) {
    height: 25%;
    width: 85%;
  }
`;

export {
  CapsuleButtonWrapper,
  CapsuleButton,
  RocketWrapper,
  LandingPad,
  LandingPadWrapper,
  LandingPadButton,
  LandingPadInput,
};
