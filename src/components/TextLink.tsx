import { FC } from "react";
import { styled } from "styled-components";

interface TextLinkProps {
  to: string;
  linkText: string;
  underline?: boolean;
  fontSize?: string;
  w?: string;
}

interface Props {
  underline?: boolean;
  fontSize?: string;
  w?: string;
}

const TEXTLINK = styled.a<Props>`
  color: #f78719;
  text-decoration: ${({ underline }) => (underline ? "undeline" : "none")};
  ${({ fontSize }) => fontSize && `font-size:${fontSize};`}
  ${({ w }) => w && `width:${w};`}
`;

export const TextLink: FC<TextLinkProps> = ({
  to,
  linkText,
  underline,
  fontSize,
  w,
}) => {
  return (
    <TEXTLINK href={to} underline={underline} fontSize={fontSize} w={w}>
      {linkText}
    </TEXTLINK>
  );
};
