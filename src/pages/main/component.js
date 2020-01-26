import React, { Component } from 'react'

import Widgets from '../widgets/container';
import Chat from '../chat/container';
import Popup from '../popup/component';

import { getWidgets } from './api/getWidgets';

import {
  Wrap,
  Header,
  WidgetsWrap,
  Footer,
  Title,
  Left,
  Right,
  Button,
  Icon,
} from './styled';


export default class MainPage extends Component {
  state = {
		widgets: [],
		showPopup: false,
		dialog: [
			{
				role: "robot",
				text: "Привет, я Таня",
				diagram: [],
			},
			{
				role: "human",
				text: "Привет, помоги мне",
				diagram: [],
			},
			{
				role: "robot",
				text: "Сори, я пока ничего не умею",
				diagram: [],
			},
		],
  };

	constructor() {
		super();

		this.openPopup = this.showPopup.bind(this);
	}

  componentDidMount() {
    getWidgets().then((data) => {
      this.setState({ widgets: data });
    })
  }

	showPopup = () => {
		this.setState({showPopup: true});
	}

  render() {
		const { widgets } = this.state;
		console.log(this.state.dialog);
    return (
      <Wrap>
				<Popup 
					dialog={this.state.dialog}
					show={this.state.showPopup}
					closePopup={() => this.setState({showPopup: false})}
					addToDialog={(el) => this.setState((state) => {
						const dialog = state.dialog;
						dialog.push(el);
						return { dialog };
					})}
				/>
        <Header>Header</Header>
        <WidgetsWrap>
          <Left>
            <Icon/>
            <Title>
              Быстрые действия
              <Button></Button>
            </Title>
            <Widgets widgets={widgets}/>
          </Left>
          <Right>
            <Title>
              Голосовой помощник
            </Title>
						<Chat 
							openPopup={() => this.openPopup()}
							addToDialog={(el) => this.setState((state) => {
								const dialog = state.dialog;
								dialog.push(el);
								return { dialog };
							})}/>
          </Right>
        </WidgetsWrap>
        <Footer>Footer</Footer>
      </Wrap>
    )
  }
}
