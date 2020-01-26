import React, { Component } from 'react'

import {
	Wrap,
	Background,
	Chat,
	DialogWrap,
	HumanText,
	RobotText,
	Buttons,
	Button,
} from './styled';

export default class Popup extends Component {
	render() {
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
							<Buttons>
								<Button>
									Спросить ещё
								</Button>
								<Button onClick={() => this.props.closePopup()}>
									Вернуться на сайт
								</Button>
							</Buttons>
						</Chat>
					</Wrap>
				</div>
				: null
		)
	}
}
