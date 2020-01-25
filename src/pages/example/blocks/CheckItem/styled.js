import styled from "styled-components";

import checked from '../../assets/checked.png';

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
  width: 190px;
  height: 110px;
  margin-right: 25px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: #eaeaea 0px 5px 11px 3px;
  cursor: pointer;
  transition: all 0.07s 0.07s linear;

  ${props => props.checked && 'border: #6ac259 2px solid;'}
  :hover {
    transform: scale(1.05) translateY(-3px);
  }
`;

export const Logo = styled.div`
  height: 100%;
  width: 100%;
  background: url(${props => props.icon}) 50% 50% / ${props => !props.description ? '130px' : '65px'} no-repeat;
`;

export const Description = styled.div`
  margin-bottom: 10px;
  color: #989898;
`;

export const Checkbox = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  border: 1px solid;
  height: 20px;
  width: 20px;
  border-radius: 50%;

  ${props => props.checked && `
    border: none;
    background: url(${checked}) 50% 50% / 20px no-repeat
  `};
`;
