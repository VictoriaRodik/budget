import { useContext } from "react";
import { AppContext } from "../providers/context";
import { useBooleanToggle } from "../../hooks";

const Settings = () => {
  const { state, dispatch } = useContext(AppContext);
  const {status, handleStatusChange } = useBooleanToggle()

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
      <div>
        <button
          onClick={handleStatusChange}
        >
          Advanced Settings
        </button>
        {status ? (
          <div>
            <h2>Advanced Settings</h2>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Settings;
