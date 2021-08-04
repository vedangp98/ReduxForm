import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField";
import validate from "../validations/validation";

const FormFirst = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="First Name"
        />
      </div>
      <div>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "Form",
  validate,
})(FormFirst);
