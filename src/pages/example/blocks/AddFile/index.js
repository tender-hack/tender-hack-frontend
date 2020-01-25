import React, { Component } from 'react'

import {Input, CustomUpload} from './styled';

export default class AddFile extends Component {
  render() {
    return (
      <div>
        <CustomUpload htmlFor="file-upload">
          Нажмите чтобы прикрепить файл
        </CustomUpload>
        <Input id="file-upload" type="file" value={this.props.value} onChange={this.props.onChange}/>
      </div>
    )
  }
}
