import React, { Component } from "react";
import PropTypes from "prop-types";
import FormFirst from "./FormFirst";
import FormSecond from "./FromSecond";
import FormThird from "./FormThird";

class Form extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <FormFirst onSubmit={this.nextPage} />}
        {page === 2 && (
          <FormSecond
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <FormThird previousPage={this.previousPage} onSubmit={onSubmit} />
        )}
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isrequired,
};

export default Form;
