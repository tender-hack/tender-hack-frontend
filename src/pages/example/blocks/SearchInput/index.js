import React, { Component } from 'react'

import { Wrap, Input, Loupe } from "./styled";

export default class SearchInput extends Component {
  render() {
    return (
      <Wrap>
        <Loupe />
        <Input placeholder="Введите интересующий товар" {...this.props}/>
      </Wrap>
    )
  }
}
