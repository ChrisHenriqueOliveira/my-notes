import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  width: 100%;
  height: 350px;

  background-color: #f0f2fd;
  border: 1px solid #f0f2fd;
  border-radius: 10px;

  .note-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 8px;

    h1 {
      font: 16px Roboto, sans-serif;
      font-weight: 700;
      color: #000;
    }

    svg {
      cursor: pointer;
      height: 30px;
      width: 30px;
    }
  }
`;

export const ReadMode = styled.div`
  cursor: pointer;
  flex: 1;

  width: 100%;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #eee;
  background-color: #fff;
  overflow-y: auto;
  color: #000;
  font: 16px Roboto, sans-serif;
  font-weight: 400;
`;

export const MarkDownField = styled(ReactMarkdown)`
  word-break: break-all;
  white-space: pre-line;
`;

export const EditMode = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  textarea {
    padding: 16px;
    flex: 1;
    resize: none;
    border-radius: 10px;
    border: 1px solid #eee;
    background-color: #fff;
  }
`;
