import React from 'react';
import { Text, View } from 'react-native';
import * as data from '../../weather.json';

class Temp extends React.Component {
  static defaultProps = data;
  render() {
      return (
      <View>
        {console.log(this.props)}
        <Text>{'ss'}</Text>
      </View>
    );
  }
}

export default Temp;
