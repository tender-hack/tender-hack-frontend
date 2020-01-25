import React, { Component } from "react";
import queryString from "query-string";

import ParamsPage from "./params_page";
import SearchResult from "./search_result";
import SendResult from "./send_result";

import { startSearch } from "./api/startSearch";
import { sendRequests } from "./api/sendRequests";

import {
  Wrap,
  HeaderBlock,
  Header,
  Description,
  Breadcrumbs,
  Breadcrumb,
  BreadcrumbWrap,
  BreadcrumbText
} from "./styled";
import { Button } from "./params_page/styled";

const steps = ["Параметры поиска", "Результаты поиска", "Результаты рассылки"];

export default class Search extends Component {
  state = {
    currentStep: 0,
    loading: false,
    searchData: {},
  };

  componentDidMount() {
    const queryUid = queryString.parse(window.location.search).queryUid;

    if (queryUid) {
      this.setState({currentStep: 2});
    }
  }
  
  render() {
    const { currentStep, searchData } = this.state;

    const queryUid = queryString.parse(window.location.search).queryUid;

    return (
      <Wrap>
        <HeaderBlock>
          <Header>Робозакупки</Header>
          <Button>Новый поиск</Button>
        </HeaderBlock>
        <Description>
          Наш сервис поможет вам найти нужного поставщика, автоматически
          обзвонив все релевантные компании в поисках того, что вы ищете
        </Description>
        <Breadcrumbs>
          {steps.map((item, index) => {
            const filled = currentStep >= index;

            return (
              <BreadcrumbWrap
                key={item}
                onClick={() => filled && this.state.currentStep !== 2 && this.setState({ currentStep: index })}
                filled={filled}
              >
                <Breadcrumb last={index === steps.length - 1} filled={filled}>
                  {index + 1}
                </Breadcrumb>
                <BreadcrumbText filled={filled}>{item}</BreadcrumbText>
              </BreadcrumbWrap>
            );
          })}
        </Breadcrumbs>
        {currentStep === 0 && !queryUid && (
          <ParamsPage
            onSend={data => {
              this.setState({ loading: true });
              startSearch(data).then(searchData => {
                this.setState({ loading: false, currentStep: 1, searchData });
              });
            }}
          />
        )}
        {currentStep === 1 && !queryUid && (
          <SearchResult
            onSend={data => {
              this.setState({ loading: true });
              sendRequests(data).then(sendRequestsData => {
                this.setState({
                  loading: false,
                });
                this.props.history.push(`?queryUid=${searchData.queryUid}`)
              });
            }}
            setState={this.setState.bind(this)}
            {...searchData}
          />
        )}
        {queryUid && <SendResult />}
      </Wrap>
    );
  }
}
