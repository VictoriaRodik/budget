import { useState } from "react";
import PropTypes from "prop-types";
import { Wrapper, Input, Row, Comment } from "./styles";
import { Button } from "../styledComponents/Button";
import { FormattedMessage } from "react-intl";

const Form = (props) => {
  const [form, setForm] = useState({
    value: "",
    date: new Date().toISOString().substring(0, 10),
    comment: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    props.onChange(form);
    setForm({
      ...form,
      value: "",
      comment: "",
    });

    props.onCloseFormModal();
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Row>
          <Input
            name="value"
            type="number"
            placeholder="Sum"
            value={form.value}
            onChange={onChange}
          />

          <Input
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
          />
        </Row>
        <Row>
          <Button>
            <FormattedMessage id="saveButton" />
          </Button>

          <Comment name="comment" value={form.comment} onChange={onChange} />
        </Row>
      </form>
    </Wrapper>
  );
};

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
