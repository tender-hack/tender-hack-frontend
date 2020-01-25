import styled from "styled-components";

import loupe from '../../assets/loupe.png';

export const Wrap = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 630px;
  padding-left: 54px;
  outline: none;
  margin-bottom: 20px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  border: #cecece 1px solid;

`;

export const Loupe = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 12px;
  background: url(${loupe}) 50% 50% / 20px no-repeat;
`;