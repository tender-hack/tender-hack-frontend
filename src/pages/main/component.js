import React, { Component } from 'react'

import Widgets from '../widgets/container';
import Chat from '../chat/container';
import Popup from '../popup/component';

import { getWidgets } from './api/getWidgets';
import { getDefaultWidgets } from "./api/getDefaultWidgets";

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

import { withRouter } from "react-router";

class MainPage extends Component {
  state = {
		widgets: [],
		showPopup: false,
		maxWidgetsNumber: 10,
		currentSpeech: '',
		dialog: [
			{
				role: "robot",
				text: "Привет, я Таня",
			},
		],
  };

	constructor() {
		super();

		this.openPopup = this.showPopup.bind(this);
	}

  componentDidMount() {
    if (this.props.history.location === `/unauthorized`) {
      getDefaultWidgets().then((data) => {
        this.setState({ widgets: data });
      })
    } else {
      getWidgets().then((data) => {
        this.setState({ widgets: data });
      })
    }
  }

	showPopup = () => {
		this.setState({showPopup: true});
	}

	closeSession = () => {
		this.setState({showPopup: false, dialog: [
			{
				role: "robot",
				text: "Привет, я Таня",
			},
		]});
	}

  render() {
		const {widgets, maxWidgetsNumber} = this.state;
		console.log(this.state.dialog, this.state.currentSpeech);
    return (
      <Wrap>
				<Popup 
					dialog={this.state.dialog}
					show={this.state.showPopup}
					closePopup={() => this.setState({showPopup: false})}
					addToDialog={(el) => this.setState((state) => {
						const dialog = state.dialog;
						dialog.push(el);
						if (el.role === 'robot') {
							this.setState({currentSpeech: el.text})
						}
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
            <Widgets widgets={widgets} maxItems={maxWidgetsNumber}/>
          </Left>
          <Right>
            <Title>
              Голосовой помощник
            </Title>
						<Chat
							openPopup={() => this.openPopup()}
							closeSession={this.closeSession}
							currentSpeech={this.state.currentSpeech}
							addToDialog={(el) => this.setState((state) => {
								const dialog = state.dialog;
								dialog.push(el);
								if (el.role === 'robot') {
									this.setState({currentSpeech: el.text})
								}
								return { dialog };
							})}/>
          </Right>
        </WidgetsWrap>
        <Footer>Footer</Footer>
      </Wrap>
    )
  }
}

export default withRouter(MainPage);
