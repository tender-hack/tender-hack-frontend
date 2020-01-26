import React, { Component } from 'react'

import {
  Wrap,
  Widget,
} from './styled';

import { incrementWidget } from "../main/api/incrementWidget";
import { withRouter } from "react-router-dom";


class Widgets extends Component {

  onSelect = (item) => {
    incrementWidget(item.uid);

    if (item.type === `NAVIGATION`) {
      this.props.history.push(item.extraInfo.url)
    }
  };

  render() {
    const { widgets } = this.props;
    return (
      <Wrap>
        {widgets && widgets.map(item =>
          <Widget key={item.uid} onClick={() => this.onSelect(item)}>
            {item.name}
          </Widget>
        )}
      </Wrap>
    )
  }
}

export default withRouter(Widgets);
