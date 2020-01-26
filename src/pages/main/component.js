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

import headerUnauthorizedIcon from './assets/header_unauthorized.png';
import defaultHeaderIcon from './assets/header.png';

const headerIcon = path => {
  switch (path) {
    case `/unauthorized`:
      return headerUnauthorizedIcon;
    default:
      return defaultHeaderIcon;
  }
};

class MainPage extends Component {
  state = {
		widgets: [],
		showPopup: false,
    maxWidgetsNumber: 10,
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
    const { pathname } = this.props.history.location;

    if (pathname === `/unauthorized`) {
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

  render() {
		const {widgets, maxWidgetsNumber} = this.state;
    const {pathname} = this.props.history.location;
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
        <Header>
          <img src={headerIcon(pathname)}/>
        </Header>
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

export default withRouter(MainPage);
