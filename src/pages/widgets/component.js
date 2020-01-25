import React, { Component } from 'react'

import {
	Wrap,
	Widget,
} from './styled';

const arr = [
	{
		key: 1,
		description: 'test1',
	},
	{
		key: 2,
		description: 'test2',
	},
	{
		key: 3,
		description: 'test3',
	},
];

export default class Widgets extends Component {
	render() {
		return (
			<Wrap>
				{arr.map(item => 
					<Widget>
						{item.description}
					</Widget>
				)}
			</Wrap>
		)
	}
}
