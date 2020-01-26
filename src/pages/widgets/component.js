import React, { Component } from 'react'

import {
  Wrap,
  Widget,
  WidgetImageContainer,
  WidgetFlexContainer,
  WidgetNameContainer,
} from './styled';

import { incrementWidget } from "../main/api/incrementWidget";
import { withRouter } from "react-router-dom";

import backIcon from './assets/back.png';
import offerIcon from './assets/new_offer.png';
import contractIcon from './assets/new_contract.png';
import quotesIcon from './assets/all_tenders.png';
import questionIcon from './assets/QUESTION.png';
import signIcon from './assets/sign.png';
import loginIcon from './assets/login.png';
import defaultIcon from './assets/chat_woman.png';

const mainBackWidget = {
  "name": "На главную",
  "type": "NAVIGATION",
  "subType": "BACK",
  "extraInfo": { "url": "/" }
};

const widgetIcon = subType => {
  switch (subType) {
    case `BACK`:
      return backIcon;
    case `OFFER`:
      return offerIcon;
    case `CONTRACT`:
      return contractIcon;
    case `QUOTES`:
      return quotesIcon;
    case `QUESTION`:
      return questionIcon;
    case `SIGN`:
      return signIcon;
    case `LOGIN`:
      return loginIcon;
    default:
      return defaultIcon;
  }
};

class Widgets extends Component {

  onSelect = (item) => {
    incrementWidget(item.uid);

    if (item.type === `NAVIGATION`) {
      this.props.history.push(item.extraInfo.url)
    }
  };

  render() {
    const { widgets, maxItems } = this.props;
    const { pathname } = window.location;

    return (
      <Wrap>
				{pathname !== `/` && !pathname.includes('/unauthorized') &&
					<Widget onClick={() => this.onSelect(mainBackWidget)}>
						<WidgetFlexContainer>
							<WidgetImageContainer>
								<img src={widgetIcon(mainBackWidget.subType)} alt={mainBackWidget.name}/>
							</WidgetImageContainer>
							<WidgetNameContainer>
								{mainBackWidget.name}
							</WidgetNameContainer>
						</WidgetFlexContainer>
					</Widget>
				}
        {widgets && widgets.slice(0, maxItems).map(item =>
          <Widget key={item.uid} onClick={() => this.onSelect(item)}>
            <WidgetFlexContainer>
              <WidgetImageContainer>
                <img src={widgetIcon(item.subType)} alt={item.name}/>
              </WidgetImageContainer>
              <WidgetNameContainer>
                {item.name}
              </WidgetNameContainer>
            </WidgetFlexContainer>
          </Widget>
        )}
      </Wrap>
    )
  }
}

export default withRouter(Widgets);
