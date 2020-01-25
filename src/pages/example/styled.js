import styled from 'styled-components';

import arrow from './assets/arrow.png';
import arrowActive from './assets/arrow-active.png';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const Header = styled.div`
  margin-bottom: 4px;
  font-size: 44px;
  font-weight: bold;
`;

export const HeaderBlock = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Description = styled.div`
  max-width: 630px;
  margin-bottom: 25px;
  color: #989898;
`;

export const Breadcrumbs = styled.div`
  justify-content: center;
  display: flex;
  width: 670px;
  margin-bottom: 25px;
`;

export const Breadcrumb = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
  color: ${props => props.filled ? '#fff' : '#000'}
  background-color: ${props => props.filled ? '#6EE79F' : '#D8D8D8'}

  :before {
    position: absolute;
    top: 40px;
    right: -20px;
    width: 100px;
    height: 30px;
    ${props => props.last && ''}
    background: url(${props => props.filled ? arrowActive : arrow});
  }
`;

export const BreadcrumbText = styled.div`
  color: ${props => props.filled ? '#6EE79F' : '#D8D8D8'}
`;

export const BreadcrumbWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  ${props => props.filled && 'cursor: pointer'};
`;