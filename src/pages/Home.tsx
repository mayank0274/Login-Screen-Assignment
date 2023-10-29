import { styled } from "styled-components";
import { Login } from "../components/Login";
import SIDEIMG from "../assets/side_image.png";
import { FC } from "react";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageSection = styled.section`
  background-image: url(${SIDEIMG});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 40%;
  height: 100%;
  align-self: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Home: FC = () => {
  return (
    <Wrapper>
      <ImageSection></ImageSection>
      <Login />
    </Wrapper>
  );
};
