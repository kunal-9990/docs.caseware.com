
import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ 
    checked,
    className,
    label,
    name, 
    onChange
}) => (
    <div className="checkbox">
        <input type="checkbox" name={name} checked={checked} onChange={onChange} />
        <label className={className}>
            {label}
        </label>
    </div>
);

Checkbox.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

export default Checkbox;