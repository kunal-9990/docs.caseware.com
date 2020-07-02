import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
			multiValue: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(option) {
    this.setState({ multiValue: option }, () => this.props.onChange(this.state.multiValue));
  }

  render() {
    return (
      <div>
        <Select
					name="filters"
					placeholder={this.props.placeholder}
					className="select"
					classNamePrefix="select"
          value={this.state.multiValue}
          options={this.props.options}
					onChange={this.handleChange}
					onClick={e => { e.preventDefault(); e.stopPropagation(); }}
					isMulti={this.props.isMulti}
          group
        />
      </div>
    );
  }
}

Dropdown.defaultProps = {
  placeholder: 'Filter',
  isMulti: false
}

Dropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  isMulti: PropTypes.bool
}

export default Dropdown
