import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import trim from "ramda/es/trim";
import compose from "ramda/es/compose";

const styles = () => ({
  input: { width: "100%" }
});

class FormControlInput extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(e) {
    return this.props.onChange(e.target.value);
  }

  onBlur(e) {
    return compose(this.props.onBlur, trim)(e.target.value);
  }

  render() {
    const {
      classes,
      value,
      name,
      error,
      label,
      helperText,
      controlType,
      placeholder,
      InputProps
    } = this.props;

    return (
      <TextField
        id={name}
        name={name}
        type={controlType || "text"}
        value={value}
        label={label}
        error={error}
        placeholder={placeholder}
        helperText={helperText}
        fullWidth
        onChange={this.onChange}
        onBlur={this.onBlur}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            this.onBlur(e);
          }
        }}
        InputProps={{ ...InputProps, classes: { input: classes.input } }}
      />
    );
  }
}

FormControlInput.defaultProps = {
  InputProps: {}
};

FormControlInput.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,

  classes: PropTypes.object.isRequired,
  controlType: PropTypes.string,

  InputProps: PropTypes.object
};

export default withStyles(styles)(FormControlInput);
