import { useState, useEffect, useCallback } from "react";
import { STATUSES } from "./constants";
import { getItems, addItem } from "./utils/indexDB";

export const useBooleanToggle = () => {
  const [status, setStatus] = useState(false);

  const handleStatusChange = () => {
    setStatus((currentStatus) => !currentStatus);
  };

  return {
    status,
    handleStatusChange,
  };
};

export const useData = () => {
  const [state, setState] = useState({
    transactions: [],
    error: "",
    status: STATUSES.IDLE,
  });

  useEffect(() => {
    setState((state) => ({
      ...state,
      status: STATUSES.PENDING,
    }));

    getItems()
      .then((transactions) => {
        setState((state) => ({
          ...state,
          transactions,
          status: STATUSES.SUCCESS,
        }));
      })
      .catch((e) => {
        setState((state) => ({
          ...state,
          transactions: [],
          status: STATUSES.ERROR,
          error: e,
        }));
      });
  }, []);

  const pushTransaction = useCallback((data) => {
    const transaction = {
      ...data,
      value: +data.value,
      id: Date.now(),
    };
    setState((state) => ({
      ...state,
      transactions: [transaction, ...state.transactions],
    }));
    addItem(transaction);
  }, []);

  const onDelete = useCallback(
    (id) => {
      setState((state) => ({
        ...state,
        transactions: state.transactions.filter((item) => item.id !== id),
      }));
    },
    []
  );

  const onStarClick = useCallback(
    (id) => {
      setState((state) => ({
        ...state,
        transactions: state.transactions.map((item) =>
          item.id !== id
            ? item
            : {
                ...item,
                isStarred: !item.isStarred,
              }
        ),
      }));
    },
    []
  );

  return {
    ...state,
    pushTransaction,
    onDelete,
    onStarClick,
  };
};
