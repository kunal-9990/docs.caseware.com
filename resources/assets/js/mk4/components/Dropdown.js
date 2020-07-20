import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
			multiValue: this.props.preSelected
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ multiValue: this.props.preSelected })
  }

  handleChange(option) {
    this.setState({ multiValue: option }, () => this.props.onChange(this.state.multiValue));
  }

  render() {
    return (
      <div>
        <Select
					name="filters"
					// placeholder={this.props.placeholder}
          placeholder="test123"
          className="select"
					classNamePrefix="select"
          value={this.props.preSelected.length > 0 ? this.props.preSelected : this.state.multiValue}
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
  isMulti: false,
  placeholder: 'Filter',
  preSelected: []
}

Dropdown.propTypes = {
  isMulti: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  preSelected: PropTypes.array
}

export default Dropdown
