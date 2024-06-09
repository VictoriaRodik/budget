import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
`;
Wrapper.displayName = "TransactionWrapper";

export const Input = styled.input`
  border-radius: 3px;
  padding: 0 5px;
  min-width: 80px;
  margin-bottom: 3px;
  margin-right: 10px;
  border: 1px solid #dbdbdb;
  height: 40px;
  outline: none;
  width: 138px;
`;
Input.displayName = "Input";

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
Row.displayName = "Row";

export const Comment = styled.textarea`
  min-height: 40px;
  line-height: 1.5;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 3px;
  width: 150px;
  margin: 0px;
  height: 40px;
  min-width: 140px;
  border: 1px solid #dbdbdb;
  outline: none;
`;
Comment.displayName = "Comment";
