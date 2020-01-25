import React, { Component } from "react";
import QRCode from "qrcode.react";
import queryString from "query-string";

import { historyQueries } from "../api/historyQueries";
import { updateSuppliers } from "../api/updateSuppliers";

import {
  Request,
  Text,
  Input,
  Title,
  Supplier,
  Info,
  Resource,
  AboutCompany,
  Contacts,
  Name,
  Phone,
  Email,
  Site,
  Good,
  Bad,
  Button,
  AnswerTitle,
  WrapInfo,
  AnswersWrap,
  AnswerTextArea,
  Answers,
} from "./styled";

export default class SendResult extends Component {  state = {};
  state = {
    queryString: "",

  }

  componentDidMount() {
    const queryUid = queryString.parse(window.location.search).queryUid;

    historyQueries(queryUid).then(data => {
      this.setState({queryString: data.queryString});
    });

    setInterval(() => {
      updateSuppliers(queryUid).then(data => {
        this.setState({suppliers: data});
      });
    }, 5000);
  }

  render() {
    const {queryString, suppliers} = this.state;
    return (
      <div>
        <Request>
          <Text>Запрос:</Text>
          <Input disabled value={queryString} />
        </Request>
        <Title>
          Результаты рассылки
        </Title>
        {suppliers ? suppliers.map(item => (
          <Supplier key={item.url}>
            <WrapInfo>
              <Info>
                <AboutCompany>
                  <QRCode value={item.phone || "no_data"} />
                  <Contacts>
                    <Name>{item.name}</Name>
                    <Phone>{item.phone}</Phone>
                    <Email>{item.email}</Email>
                    <Site>{item.url}</Site>
                  </Contacts>
                </AboutCompany>
              </Info>
              <Resource>
                {item.status === "OK_ITEM" && <Good>У них есть товар</Good>} 
                {item.status === "NO_ITEM" && <Bad>Нет товара</Bad>}
                {item.status === "NO_RESPONSE" && <Bad>Нет ответа</Bad>}
              </Resource>
            </WrapInfo>
            <AnswersWrap>
            {item.answers && item.answers.map(answer => 
              <Answers>
                <AnswerTitle>{answer.contactType === "CALL" ? "Что ответили по телефону?" : "Что ответили в письме?"}</AnswerTitle>
                <AnswerTextArea>{answer.message}</AnswerTextArea>
                <Button href={`tel:${item.phone}`}>Ответить</Button>
              </Answers>
              )}
            </AnswersWrap>
          </Supplier>
        )) :
        <div>loading</div>}
      </div>
    );
  }
}
