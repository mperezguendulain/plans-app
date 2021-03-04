import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const RadioBtn = ({
  onChange,
  checked,
  value,
  label
}) => {

  /**
   * In the next code I am using 'id', this is necesary for the styles working well
   * Instead of use 'id' is recommended to use 'ref'.
   */
  return (
    <p>
      <input
        type="radio"
        name="radio-group"
        id={value}
        value={value}
        onChange={onChange}
        checked={checked} />
      <label htmlFor={value}>{label}</label>
    </p>
  );

};

RadioBtn.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

RadioBtn.defaultProps = {
  onChange: () => {},
  checked: false
};

export default React.memo(RadioBtn);