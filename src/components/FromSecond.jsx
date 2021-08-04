import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validations/validation";
import renderField from "../renderField";

const rendeerError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const FormSecond = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {""}
            male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {""}
            Female
          </label>
          <Field name="sex" component={rendeerError} />
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field name="age" type="age" label="age" />
        </div>
      </div>
      <div>
        <button type="button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "Form",
  validate,
})(FormSecond);
