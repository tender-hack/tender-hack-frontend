import React, { Component } from 'react'
import Chart from 'chart.js';

import { sendText } from '../api/sendText';

import {
	Wrap,
	Background,
	Chat,
	DialogWrap,
	HumanText,
	RobotText,
	RobotChart,
	Buttons,
	Button,
	InputWrap,
	Input,
	Canvas,
} from './styled';

export default class Popup extends Component {
	state = {
		currentInput: '',
	}
	chartRef = React.createRef();

	componentDidUpdate() {
		const node = document.getElementById("block");
		if (node)
			node.scrollTop = 9999;
		if (this.props.dialog && this.props.dialog.some(item => !!item.chartInfo)) {
			const myChartRef = this.chartRef.current.getContext("2d");
			const item = this.props.dialog.find(item => !!item.chartInfo);
console.log(item);
			new Chart(myChartRef, {
				type: "pie",
				data: {
					//Bring in data
					labels: item.chartInfo.map(item => item.legend),
					datasets: [
						{
							data: item.chartInfo.map(item => {return item.percent}),
							backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#8463FF",
                "#84FF63",
                "#6384FF"
            ]
						}
					],
				},
				options: {
					//Customize chart options
				}
			});
		}
	}
	

	render() {
		console.log(this.props.dialog);
		return (
			this.props.show ?
				<div>
					<Background />
					<Wrap>
						<Chat>
							<DialogWrap id='block'>
								{this.props.dialog && this.props.dialog.map((item, index) => 
									item.role === "human" ? 
										<HumanText key={index}>{item.text}</HumanText> :
										<div key={index}>
											<RobotText>{item.text}</RobotText>
											{item.chartInfo &&
												<RobotChart key={index}>
													<Canvas id={index} ref={this.chartRef} width="200" height="200"></Canvas>
												</RobotChart>
											}
										</div>
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
												this.props.addToDialog({role: 'robot', ...res});
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
