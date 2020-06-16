import React from 'react'
import Select from 'react-select'

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
