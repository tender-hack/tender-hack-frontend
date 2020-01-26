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
		showPopup: false,
		currentInput: '',
	}

	componentDidUpdate(prevProps, prevState) {
		const node = document.getElementsByClassName('rs-play')[0];
		console.log(this.props.currentSpeech);
		if (node && prevProps.currentSpeech !== this.props.currentSpeech) {
			console.log('object');
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
							onKeyDown={(e) => {
								if (e.keyCode === 13) {
									this.props.openPopup();
									this.props.addToDialog({role: 'human', text: this.state.currentInput});
									sendText(this.state.currentInput).then((res) => {
										this.props.addToDialog({role: 'robot', ...res});
									});
								}
							}}
						/>
						<Button onClick={() => {
							if (this.state.currentInput) {
								this.props.openPopup();
								this.props.addToDialog({role: 'human', text: this.state.currentInput});
								sendText(this.state.currentInput).then((res) => {
									this.props.addToDialog({role: 'robot', ...res});
								})
							};
						}}>Задать вопрос</Button>
					</div>
				</TextBlock>

				<HiddenBlock>
					<Speech lang='ru-Latn' text={this.props.currentSpeech || ''}/>
					<Recogn onStart={this.props.openPopup} addToDialog={this.props.addToDialog} closeSession={this.props.closeSession}/>
				</HiddenBlock>
			</Wrap>
		)
	}
}
