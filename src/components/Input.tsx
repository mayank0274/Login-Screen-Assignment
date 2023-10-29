import { styled } from "styled-components";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import { FC } from "react";

interface InputProps {
  type: string;
  label?: string;
  placeholder?: string;
  value: string;
  name: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
`;

const InputTag = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 17px;
`;

const Label = styled.label`
  font-size: 18px;
`;

const InputWrapper = styled.div`
  display: flex;
  border: 1px solid #737b86;
  border-radius: 5px;
  align-items: center;
  padding: 8px;
`;

export const Input: FC<InputProps> = ({
  type,
  label,
  placeholder,
  value,
  name,
  onchange,
}) => {
  const [showPwd, setShowPwd] = useState<boolean>(false);

  return (
    <Wrapper>
      <Label htmlFor={label}>{label}</Label>
      <InputWrapper>
        <InputTag
          type={type == "password" ? (showPwd ? "text" : "password") : type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => {
            onchange(e);
          }}
        />
        {type == "password" &&
          (!showPwd ? (
            <BiHide
              onClick={() => {
                setShowPwd(!showPwd);
              }}
            />
          ) : (
            <BiShow
              onClick={() => {
                setShowPwd(!showPwd);
              }}
            />
          ))}
      </InputWrapper>
    </Wrapper>
  );
};
