import React, { Component } from 'react'

import Widgets from '../widgets/container';
import Chat from '../chat/container';

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
    widgets: []
  };

  componentDidMount() {
    getWidgets().then((data) => {
      this.setState({ widgets: data });
    })
  }

  render() {
    const { widgets } = this.state;
    return (
      <Wrap>
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
            <Chat/>
          </Right>
        </WidgetsWrap>
        <Footer>Footer</Footer>
      </Wrap>
    )
  }
}
