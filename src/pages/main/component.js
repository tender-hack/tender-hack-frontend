import React, { Component } from 'react'

import Widgets from '../widgets/container';
import Chat from '../chat/container';

import {
	Wrap,
	Header,
	WidgetsWrap,
	Footer,
} from './styled';

export default class MainPage extends Component {
	render() {
		console.log('est')
		return (
			<Wrap>
				hi
				<Header />
				<WidgetsWrap>
					<Widgets />
					<Chat />
				</WidgetsWrap>
				<Footer />
			</Wrap>
		)
	}
}
