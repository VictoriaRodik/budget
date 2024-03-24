import { useContext } from "react";
import { AppContext } from "../providers/context";

const Settings = () => {
  const { state, dispatch } = useContext(AppContext);
  const onChange = (e) => {
    const { value } = e.target;
    dispatch({
      type: "changeCurrency",
      currency: value,
    });
  };

  return (
    <>
      <h1>Settings</h1>
      <div>
        <form>
          <label>
            Currency:
            <select name="currency" value={state.currency} onChange={onChange}>
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
        </form>
      </div>
    </>
  );
};
export default Settings;
