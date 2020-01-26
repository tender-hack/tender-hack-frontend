import styled from 'styled-components';

export const Wrap = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	font-size: 32px;
	z-index: 20;
`;

export const Background = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	background: #00189a;
	opacity: 0.5;
	font-size: 32px;
	z-index: 10;
`;

export const Chat = styled.div`
	margin: 0 auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const DialogWrap = styled.div`
	width: 700px;
	margin: 100px auto 50px;
	color: #fff;
	overflow: scroll;
`;

export const HumanText = styled.div`
	max-width: 500px;
	text-align: right;
	margin-left: auto;
	margin-bottom: 10px;
`;

export const RobotText = styled.div`
	max-width: 500px;
	text-align: left;
	margin-right: auto;
	margin-bottom: 10px;
	font-weight: 900;
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	width: 700px;
	margin: 0 auto 100px;
`;

export const Button = styled.div`
	color: #fff;
	cursor: pointer;
	border: 2px solid #fff;
	padding: 10px 20px;
	border-radius: 30px;
`;

export const InputWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Input = styled.input`
	width: 700px;
	margin: 0 auto 50px;
	text-align: right;
	font-size: 24px;
	border-radius: 10px;
	border: none;
`;

export const RobotChart = styled.div`
`;

export const Canvas = styled.canvas`
	width: 200px !important;
	height: 200px !important;
`;
