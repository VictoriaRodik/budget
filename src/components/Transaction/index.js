import PropTypes from "prop-types";
import { Wrapper, TransactionDate, Value, Comment } from "./styles";
import { AppContext } from "../providers/context";
import { useCallback, useContext } from "react";

const Transaction = ({
  transaction: { id, value, date, comment },
  onDelete,
}) => {
  const { state } = useContext(AppContext);

  const deleteItem = useCallback(() => onDelete(id), [id]);

  return (
    <Wrapper value={value}>
      <TransactionDate>{date}</TransactionDate>
      <Value name="value">
        {value.toFixed(2)}, {state.currency}
      </Value>
      <Comment>{comment}</Comment>
      <button onClick={deleteItem}>Remove</button>
    </Wrapper>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    date: PropTypes.string,
    value: PropTypes.number,
  }),
};

Transaction.defaultProps = {
  transaction: {
    date: "",
    value: 0,
  },
};

export default Transaction;
