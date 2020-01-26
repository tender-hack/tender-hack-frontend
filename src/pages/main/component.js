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
import headerDefaultIcon from './assets/header.png';
import bodyTopUnauthorizedIcon from './assets/body1_unauthorized.png';
import bodyTopDefaultIcon from './assets/body1_main.png';
import bodyMiddleUnauthorizedIcon from './assets/body2_unauthorized.png';
import bodyDefaultMiddleIcon from './assets/body2_main.png';
import bodyTopSupplierIcon from './assets/supplier1.png';
import bodyMiddleSupplierIcon from './assets/supplier2.png';
import bodyTopRegisterIcon from './assets/register.png';
import bodyMiddleRegisterIcon from './assets/register_footer.png';
import bodyTopCustomerIcon from './assets/customer.png';
import bodyMiddleCustomerIcon from './assets/customer_footer.png';
import bodyTopCPIcon from './assets/cp.png';
import bodyMiddleCPIcon from './assets/cp_footer.png';


const headerIcon = path => {
  if (path.includes(`/unauthorized`)) {
    return headerUnauthorizedIcon;
  }
  return headerDefaultIcon;
};

const bodyTopIcon = path => {
  switch (path) {
    case `/unauthorized`:
      return bodyTopUnauthorizedIcon;
    case `/unauthorized/register`:
      return bodyTopRegisterIcon;
    case `/unauthorized/instruction/supplier`:
      return bodyTopSupplierIcon;
    case `/unauthorized/instruction/customer`:
      return bodyTopCustomerIcon;
    case `/unauthorized/ecp`:
      return bodyTopCPIcon;
    default:
      return bodyTopDefaultIcon;
  }
};

const bodyMiddleIcon = path => {
  switch (path) {
    case `/unauthorized`:
      return bodyMiddleUnauthorizedIcon;
    case `/unauthorized/register`:
      return bodyMiddleRegisterIcon;
    case `/unauthorized/instruction/supplier`:
      return bodyMiddleSupplierIcon;
    case `/unauthorized/instruction/customer`:
      return bodyMiddleCustomerIcon;
    case `/unauthorized/ecp`:
      return bodyMiddleCPIcon;
    default:
      return bodyDefaultMiddleIcon;
  }
};

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
    const { pathname } = this.props.history.location;

    if (pathname.includes(`/unauthorized`)) {
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
						if (el.role === 'robot') {
							this.setState({currentSpeech: el.text})
						}
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
        <Footer>
          <img src={bodyTopIcon(pathname)}/>
          <img src={bodyMiddleIcon(pathname)}/>
        </Footer>
      </Wrap>
    )
  }
}

export default withRouter(MainPage);
