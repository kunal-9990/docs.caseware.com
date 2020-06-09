import React, { Component } from 'react'
import Checkbox from './Checkbox'

class Filter extends Component {
  
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <div className="filter">
          <div className="filter__wrapper">
            <ul>
              {this.props.dropdownItems.map(group => (
                <div>
                  <h3>{ group.title }</h3>
                  {group.items.map((item, i) => {
                    if (item !== "Uncategorized") {
                      return (
                        <Checkbox 
                          checked={this.props.selectedFilters.includes(item)} 
                          key={item + '-' + i}
                          label={item}
                          onChange={() => this.props.updateSelectedFilters(item)}
                          name={item} 
                        />
                      )
                    }
                  })}
                </div>
              ))}
            </ul>
          </div>
        </div>
      )
    }
}

export default Filter