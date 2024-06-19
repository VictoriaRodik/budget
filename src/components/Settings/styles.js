import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  font-size: 16px;
  padding: 5px;
  margin: 10px;

  @media (min-width: 480px) {
    padding: 10px;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;
Wrapper.displayName = "Wrapper";

export const OptionWrapper = styled.div`
  padding: 5px;
  margin: 5px;
`;
OptionWrapper.displayName = "OptionWrapper";

