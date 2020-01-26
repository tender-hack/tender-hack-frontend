import React, { Component } from 'react'
import Speech from 'react-speech';
import Recogn from './recog';

import { sendText } from '../api/sendText';

import {
	Wrap,
	Icon,
	TextBlock,
	Text,
	Input,
	Button,
	HiddenBlock,
} from "./styled";

const arr = [
	'Привет!',
	'Я голосовой помощник Таня',
	'Я могу представить бизнес аналитику или перевести тебя на нужный раздел сайта',
	'Просто скажи «Привет, Таня!» и задай вопрос',
];

export default class Chat extends Component {
	state = {
		currentSpeech: 'test',
		showPopup: false,
		currentInput: '',
	}

	componentDidUpdate(prevProps, prevState) {
		const node = document.getElementsByClassName('rs-play')[0];
		if (node && prevState.currentSpeech !== this.state.currentSpeech) {
			node.click();
		};
	}
	
	render() {
		return (
			<Wrap>
				<Icon />
				<TextBlock>
					{arr.map(item => <Text key={item}>{item}</Text>)}
					<div>
						<Input 
							value={this.state.currentInput}
							onChange={(e) => this.setState({currentInput: e.target.value})}
						/>
						<Button onClick={() => {
							this.props.openPopup();
							console.log(this.state.currentInput);
							sendText(this.state.currentInput).then((res) => {
								console.log(res)
								this.props.addToDialog({role: 'human', text: res.text})
							});
						}}>Задать вопрос</Button>
					</div>
				</TextBlock>

				<HiddenBlock>
					<Speech lang='ru-Latn' text={this.state.currentSpeech}/>
					<Recogn onStart={this.props.openPopup} addToDialog={this.props.addToDialog} />
				</HiddenBlock>
			</Wrap>
		)
	}
}
