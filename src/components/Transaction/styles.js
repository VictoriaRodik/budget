import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ value, theme }) =>
    value < 0 ? theme.additionalBackground : theme.background};
  color: ${({ theme }) => theme.color};
  border: 1px solid;
  border-color: ${({ theme }) => theme.color};
  border-radius: 3px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;

  @media (min-width: 480px) {
    padding: 10px;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

Wrapper.displayName = "TransactionWrapper";

export const TransactionDate = styled.div`
  flex-grow: 1;
`;
TransactionDate.displayName = "TransactionDate";

export const Value = styled.div`
  flex-grow: 1;
  margin: 0 0 5px 30px;
`;
Value.displayName = "Value";

export const Comment = styled.div`
  flex-grow: 2;
  margin: 0 0 5px 30px;
  transition: opacity 0.3s ease;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0.7)};
  &:hover {
    opacity: 1;
  }
`;
Comment.displayName = "Comment";

export const Icon = styled.span`
  img {
    max-width: 20px;
    margin-right: 10px;
  }
`;
Icon.displayName = "Icon";

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
DateContainer.displayName = "DateContainer";
