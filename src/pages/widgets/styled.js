import styled from 'styled-components';

export const Wrap = styled.div`
	display: flex;
	margin-left: -15px;
	max-width: 640px;
	overflow-x: scroll;
`;

export const Widget = styled.div`
	margin: 0 8px 30px;
	width: 120px;
	min-width: 120px;
	height: 150px;
	border-radius: 15px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	overflow-y: hidden;
`;

export const WidgetFlexContainer = styled.div`
  padding: 12px 8px 12px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
`;

export const WidgetImageContainer = styled.button`
  overflow: hidden;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  img {
    float: left;
    width: 50px;
    height: 50px;
  }
`;

export const WidgetNameContainer = styled.div`
  margin-top: 16px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
`;
