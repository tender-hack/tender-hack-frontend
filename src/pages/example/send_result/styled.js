import styled from 'styled-components';

export const Request = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
`;

export const Input = styled.input`
  padding: 2px 10px;
  box-shadow: 0 0 6px 2px #cecece;
  width: 575px;
  height: 20px;
  border: #cecece 1px solid;
  font-size: 18px;
  background: #cecece;
  margin-top: -4px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Supplier = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 10px 20px 2px #d6d6d6;
`;

export const Info = styled.div`
`;

export const Resource = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 0 0 auto;
`;

export const AboutCompany = styled.div`
  display: flex;
  max-width: 500px;
  margin-bottom: 20px;
`;

export const QrCode = styled.div`
  margin-right: 20px;
`;

export const Contacts = styled.div`
  margin-left: 20px;
  width: 100%;
  overflow: hidden;
  word-break: break-word;
`;

export const Name = styled.div`
  margin-bottom: 6px;
  font-weight: bold;
`;

export const Phone = styled.div`
  margin-bottom: 4px;
  color: #cecece;
`;

export const Email = styled.div`
  margin-bottom: 4px;
  color: #cecece;
`;

export const Site = styled.a`
  display: block;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const Good = styled.div`
  padding: 5px 25px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  background-color: #6EE79F;
`;

export const Bad = styled.div`
  padding: 5px 25px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  background-color: #d14e58;
`;

export const AnswerWrap = styled.div`
  display: flex;
  font-weight: bold;
`;

export const AnswerTextArea = styled.div`
  border: #cecece 1px solid;
  border-radius: 10px;
  padding: 20px;
  color: #827d7d;
  margin-bottom: 10px;
`;

export const Button = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  max-width: 100%;
  border: #17b50d 2px solid;
  border-radius: 24px;
  padding: 5px;
  font-size: 17px;
  color: #17b50d;
  font-weight: bold;
  cursor: pointer;
`;

export const Answers = styled.div`
  max-width: 50%;
`;

export const AnswersWrap = styled.div`
  display: flex;
`;

export const AnswerTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const WrapInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
