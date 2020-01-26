import React, { Component } from 'react'

import { sendText } from '../api/sendText';

import {
	Wrap,
	Background,
	Chat,
	DialogWrap,
	HumanText,
	RobotText,
	Buttons,
	Button,
	InputWrap,
	Input,
} from './styled';

export default class Popup extends Component {
	state = {
		currentInput: '',
	}

	render() {
		console.log(this.props.dialog);
		return (
			this.props.show ?
				<div>
					<Background />
					<Wrap>
						<Chat>
							<DialogWrap>
								{this.props.dialog && this.props.dialog.map((item, index) => 
									item.role === "human" ? 
										<HumanText key={index}>{item.text}</HumanText> :
										<RobotText key={index}>{item.text}</RobotText>
								)}
							</DialogWrap>
							<InputWrap>
								<Input 
									value={this.state.currentInput}
									onChange={(e) => this.setState({currentInput: e.target.value})}
									onKeyDown={(e) => {
										if (e.keyCode === 13) {
											this.props.addToDialog({role: 'human', text: this.state.currentInput});
											sendText(this.state.currentInput).then((res) => {
												this.props.addToDialog({role: 'robot', text: res.text});
											});
											this.setState({currentInput: ''});
										}
									}}
								/>
								<Buttons>
									<Button>
										Спросить ещё
									</Button>
									<Button onClick={() => this.props.closePopup()}>
										Вернуться на сайт
									</Button>
								</Buttons>
							</InputWrap>
						</Chat>
					</Wrap>
				</div>
				: null
		)
	}
}
