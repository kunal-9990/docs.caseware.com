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
                <Checkbox 
                    checked={this.state.allCategoriesChecked} 
                    label={this.props.t('moduleList.all') + ' (' + this.props.modules.length + ')'}
                    onChange={() => this.selectAllCategories()}
                    name={'all'} 
                />
                {this.props.categories.map(category => {
                    if (category.id !== 1) {
                        return (
                            <Checkbox 
                                checked={this.state.checkedCategories.includes(category.id)} 
                                key={category.id}
                                label={category.name + ' (' + category.count + ')'}
                                onChange={() => this.updateSelectedCategories(category.id)}
                                name={category.name} 
                            />
                        )
                    }
                })}
            </ul>
          </div>
        </div>
      )
    }
}

export default Filter