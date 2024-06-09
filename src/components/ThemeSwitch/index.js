import React, { useContext } from "react";
import { AppContext } from "../providers/context";
import { THEMES } from "../providers/themes/themeList";
import { saveToStorage } from "../../utils/sessionStorage";
import { SwitchWrapper, ToggleButton, Slider } from "./styles";

export const ThemeSwitch = () => {
  const { state, dispatch } = useContext(AppContext);

  const setTheme = (themeName) => {
    dispatch({
      type: "setTheme",
      themeName,
    });

    saveToStorage("themeName", themeName);
  };

  return (
    <SwitchWrapper>
      <Slider className={state.themeName === THEMES.LIGHT ? "light" : "dark"} />
      <ToggleButton onClick={() => setTheme(THEMES.LIGHT)}>Light</ToggleButton>
      <ToggleButton onClick={() => setTheme(THEMES.DARK)}>Dark</ToggleButton>
    </SwitchWrapper>
  );
};
