import styled from 'styled-components';

const ConsoleWrapper = styled.div`
  grid-area: console;
  overflow-y: scroll;
  background-color: black;
  color: #00b140;
  overflow-x: hidden;
`;

const MessageDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  line-height: 1.35;
`;

const ErrorMessage = styled(MessageDiv)`
  color: red;
`;

const ConsolePre = styled.pre`
  white-space: pre-wrap;
  padding: 0 10px;
`;

export { ConsoleWrapper, MessageDiv, ErrorMessage, ConsolePre };
