import React from 'react'
import Select from 'react-select'
// import 'react-select/dist/react-select.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons'

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      multiValue: []
    };

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
					placeholder="Filters"
					className="select"
					classNamePrefix="select"
          value={this.state.multiValue}
          options={this.props.options}
					onChange={this.handleChange}
					onClick={e => { e.preventDefault(); e.stopPropagation(); }}
					isMulti
					group
        />
      </div>
    );
  }
}

export default Dropdown
