import styled from 'styled-components';

import woman from './assets/chat_woman.png';

export const Wrap = styled.div`
	display: flex;
`;

export const Icon = styled.div`
	width: 170px;
	height: 170px;
	background-color: black;
	margin-right: 20px;
	border-radius: 50%;
	background: url(${woman});
	background-repeat: no-repeat;
`;

export const TextBlock = styled.div`
	margin-top: -10px;
`;

export const Text = styled.div`
	padding: 5px 15px;
	background-color: #03a2efbf;
	border-radius: 10px;
	width: fit-content;
	margin: 7px 0;
	color: white;
	max-width: 410px;
`;

export const Input = styled.input`
	height: 30px;
	width: 300px;
	border-radius: 10px;
	margin-right: 20px;
	border: 1px solid #12121240;
`;

export const Button = styled.button`
	width: 150px;
	padding: 10px;
	border-radius: 10px;
	border: 2px solid #04ff00;
	font-size: 14px;
	font-weight: bold;
	color: #04ff00;
	cursor: pointer;
`;

export const HiddenBlock = styled.div`
	visibility: hidden;
	width: 0;
	height: 0;
`;