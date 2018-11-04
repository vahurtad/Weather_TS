import React from 'react';
// import HomeScreen from './components/Home';
import * as data from '../weather.json';
import Temp from './components/Temp';
export interface State {}

class Main extends React.Component {

  static defaultProps = data;
  render() {
    return (
    <Temp {...this.props} />
    );
  }
}

export default Main;
