import styled from "styled-components";
import { Input } from "./Input";
import { TextLink } from "./TextLink";
import { FC, useState } from "react";

const Wrapper = styled.section`
  width: 55%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 900px) {
    width: 95%;
  }
`;

const Heading = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const CheckBoxInput = styled.input``;

const Label = styled.label`
  font-size: 12px;
  color: #737b86;
`;

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

const Button = styled.button`
  width: 45%;
  background: #1575a7;
  color: #fff;
  padding: 7px;
  cursor: pointer;
  margin-top: 14px;
  border: 1px solid #1575a7;
  border-radius: 5px;
  outline: none;
  font-size: 18px;

  @media (max-width: 900px) {
    width: 60%;
    font-size: 20px;
  }
`;
const Para = styled.p`
  font-size: 15px;
`;

export const Login: FC = () => {
  const [credentials, setCredentials] = useState({
    loginId: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper>
      <Heading>Login</Heading>
      <Input
        type={"text"}
        label="Login Id"
        placeholder="Enter loginId"
        name="loginId"
        value={credentials.loginId}
        onchange={(e) => {
          handleInput(e);
        }}
      />
      <Input
        type={"password"}
        label="Password"
        placeholder="Enter password"
        name="password"
        value={credentials.password}
        onchange={(e) => {
          handleInput(e);
        }}
      />
      <OptionsWrapper>
        <div
          style={{
            width: "75%",
          }}
        >
          <CheckboxWrapper>
            <CheckBoxInput type="checkbox" />
            <Label htmlFor="RemebeerMe">Remember me</Label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <CheckBoxInput type="checkbox" />
            <Label htmlFor="T&C">
              Agree to
              <TextLink
                to="#"
                linkText="Terms and conditions"
                underline={true}
              />
            </Label>
          </CheckboxWrapper>
        </div>
        <TextLink to="#" linkText="Forgot password ?" w="25%" fontSize="13px" />
      </OptionsWrapper>
      <Button>Login</Button>
      <Para>
        Don't have account ?
        <TextLink to="#" linkText=" Register here" underline={true} />
      </Para>
    </Wrapper>
  );
};
