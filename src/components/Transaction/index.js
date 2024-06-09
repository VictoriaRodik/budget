import PropTypes from "prop-types";
import { Wrapper, TransactionDate, Value, Comment, Icon, DateContainer } from "./styles";
import { Button } from "../styledComponents/Button";
import { AppContext } from "../providers/context";
import { useCallback, useContext } from "react";
import starGrey from "../../assets/img/star-grey.svg";
import starYellow from "../../assets/img/star-yellow.svg";
import { FormattedMessage } from "react-intl";

const Transaction = ({
  transaction: { id, value, date, comment, isStarred },
  onDelete,
  onStarClick,
}) => {
  const { state } = useContext(AppContext);

  const deleteItem = useCallback(() => onDelete(id), [id, onDelete]);

  return (
    <Wrapper value={value}>
      <DateContainer>
      <Icon onClick={() => onStarClick(id)}>
        <img src={isStarred ? starYellow : starGrey} alt="Star" />
      </Icon>
      <TransactionDate>{date}</TransactionDate>
      </DateContainer>
      <Value name="value">
        {value.toFixed(2)}, {state.currency}
      </Value>
      <Comment>{comment}</Comment>
      <Button onClick={deleteItem}><FormattedMessage id="removeButton"/></Button>
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
