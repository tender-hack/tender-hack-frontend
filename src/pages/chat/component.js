import React, { Component } from 'react'
import Speech from 'react-speech';
import Recogn from './recog';

import {
	Wrap,
	Icon,
	TextBlock,
	Text,
	Input,
	Button,
} from "./styled";

const arr = [
	'Привет!',
	'Я голосовой помощник Таня',
	'Я могу представить бизнес аналитику или перевести тебя на нужный раздел сайта',
	'Просто скажи «Привет, Таня!» и задай вопрос',
]
export default class Chat extends Component {
	render() {
		return (
			<Wrap>
				<Icon />
				<Speech text="Welcome to react speech" />
				<TextBlock>
					{arr.map(item => <Text>{item}</Text>)}
					<div>
						<Input />
						<Button>Задать вопрос</Button>
					</div>
				</TextBlock>
				<Recogn />
			</Wrap>
		)
	}
}
