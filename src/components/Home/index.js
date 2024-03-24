import { useState, useEffect, useCallback } from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import { getItems, addItem } from "../../utils/indexDB";

import { Wrapper } from "./styles";
import ErrorBoundary from "../ErrorBoundary";

const Home = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const onChange = ({ value, date, comment }) => {
    const transaction = {
      value: +value,
      comment,
      date,
      id: Date.now(),
    };

    setTransactions([transaction, ...transactions]);
    setBalance(balance + Number(value));

    addItem(transaction);
  };

  useEffect(() => {
    getItems()
      .then((item) => {
        setTransactions(item);
      })
      .catch((e) => {
        console.error('error', e)
      });
  }, [setTransactions]);

  const onDelete = useCallback(
    (id) => {
      setTransactions((transactions) =>
        transactions.filter((item) => item.id !== id)
      );
    },
    [setTransactions]
  );

  return (
    <ErrorBoundary>
      <Wrapper>
        <Balance balance={balance} />
        <Form onChange={onChange} />
        <hr />
        <Transactions transactions={transactions} onDelete={onDelete} />
      </Wrapper>
    </ErrorBoundary>
  );
};
export default Home;
