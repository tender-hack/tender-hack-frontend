import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 24px;
  font-weight: bold;
`;

export const Input = styled.textarea`
  height: 140px;
  border-radius: 10px;
  border: #cecece 1px solid;
  margin-bottom: 25px;
  font-size: 20px;
  padding-top: 10px;
  padding-left: 15px;
`;

export const Button = styled.button`
  height: 46px;
  padding: 0 35px;
  border-radius: 25px;
  border: none;
  background-color: #65ef9a;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.07s 0.07s linear;

  :hover {
    transform: translateY(-2px);
  }
`;

export const CheckItemWrap = styled.div`
  display: flex;
`;
