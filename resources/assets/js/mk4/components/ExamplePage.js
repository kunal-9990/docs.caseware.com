
import React from 'react';

class ExamplePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
      console.log("click!")
    }
  
    render() {
      return (
        <div className="home-elements-2">
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
      );
    }
  }
  
  export default ExamplePage