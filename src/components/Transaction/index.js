import PropTypes from "prop-types";
import { Wrapper, TransactionDate, Value, Comment, Icon } from "./styles";
import { AppContext } from "../providers/context";
import { useCallback, useContext } from "react";
import starGrey from "../../assets/img/star-grey.svg";
import starYellow from "../../assets/img/star-yellow.svg";

const Transaction = ({
  transaction: { id, value, date, comment, isStarred },
  onDelete,
  onStarClick,
}) => {
  const { state } = useContext(AppContext);

  const deleteItem = useCallback(() => onDelete(id), [id, onDelete]);

  return (
    <Wrapper value={value}>
      <Icon onClick={() => onStarClick(id)}>
        <img src={isStarred ? starYellow : starGrey} alt="Star" />
      </Icon>
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
  onDelete: PropTypes.func,
  onStarClick: PropTypes.func,
};

Transaction.defaultProps = {
  transaction: {
    date: "",
    value: 0,
  },
};

export default Transaction;
