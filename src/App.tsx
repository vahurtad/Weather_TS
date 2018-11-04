import React from 'react';
import HomeScreen from './components/Home';

export interface State {}

class Main extends React.Component {
  render() {
    return (
      <HomeScreen {...this.props} />
    );
  }
}

export default Main;
