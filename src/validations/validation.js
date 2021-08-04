const validation = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.sex) {
    errors.sex = "Required";
  }
  if (!values.age) {
    errors.age = "Required";
  } else if (!/^[0-9\b]+$/i.test(values.age)) {
    errors.age = "Numeric Age Only";
  }
  if (!values.favouriteColor) {
    errors.favouriteColor = "Required";
  }
  return errors;
};

export default validation;
