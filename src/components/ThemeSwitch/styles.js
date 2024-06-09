import styled from "styled-components";

export const SwitchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.theme.buttonBorder};
  border-radius: 25px;
  overflow: hidden;
  width: 200px;
  background-color: ${(props) => props.theme.additionalBackground};
`;

SwitchWrapper.displayName = "SwitchWrapper";

export const ToggleButton = styled.button`
  flex: 1;
  padding: 3px;
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.theme.buttonText};
  border: none;
  outline: none;
  z-index: 1;
`;

ToggleButton.displayName = "ToggleButton";

export const Slider = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  background-color: ${(props) => props.theme.buttonColor};
  transition: left 0.3s;
  border-radius: 25px;

  &.light {
    left: 0;
  }

  &.dark {
    left: 50%;
  }
`;

Slider.displayName = "Slider";
