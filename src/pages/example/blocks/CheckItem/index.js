import React, { Component } from 'react'

import { Wrap, Description, Logo, Checkbox } from './styled';

export default class CheckItem extends Component {
  render() {
    const {
      item,
      checked,
      onClick,
    } = this.props;
    return (
      <Wrap checked={checked} onClick={onClick}>
        <Checkbox checked={checked}/>
        <Logo icon={item.img} description={!!item.description}/>
        <Description>
          {item.description}
        </Description>
      </Wrap>
    )
  }
}
