import styled from "@emotion/styled";
import { css } from "@emotion/react";

const font = css`
  font-family: "ApercuArabicProRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  text-align: left;
`;

export const TitleWrapper = styled.h2`
  position: absolute;
  width: 40%;
  height: 58px;
  left: 147px;
  top: 150px;
  ${font};
  font-size: 3.5vw;
  color: #3e3e3e;
`;

const Input = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 40%;
  height: 93px;
  left: 150px;
  padding-left: 30px;

  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
`;

export const InputName = styled(Input)`
  top: 267px;
`;

export const InputEmail = styled(Input)`
  top: 368px;
  border: ${(props) =>
    props.normal === "red" ? "2px solid #ff0000" : "1px solid #dcdcdc"};
`;

export const InputMessage = styled.textarea`
  box-sizing: border-box;
  padding: 30px 30px;
  position: absolute;
  width: 40%;
  top: 469px;
  left: 150px;
  height: 189px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  resize: none;
`;

export const Button = styled.button`
  position: absolute;
  width: 218px;
  height: 73px;
  left: 150px;
  top: 681px;
  ${font}
  font-size: 18px;
  text-align: center;
  color: #ffffff;

  &:enabled {
    background: #fad34f;
  }

  border-radius: 500px;
  border: none;

  &:hover {
    background: #0320fc;
    cursor: pointer;
  }

  &:disabled {
    background: #808080;
  }
`;

export const Span = styled.span`
  color: "red";
`;
